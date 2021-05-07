const { getClient, query } = require('../../config/db');
const HashIds = require('hashids');
const db = require('../../config/db');

/**
 * @description Main transaction used for creating a new idea
 * in the DB
 * @param {String} email
 * @param {String} title
 * @param {String} description
 * @param {String} context
 * @returns {Object}
 */
async function executeCreateIdeaTransaction(email, title, description, context) {
  const client = await getClient();

  try {
    await client.query('BEGIN');

    /**
     * @TODO When there is time, look at abstracting this out; adds too much cognitive load
     */
    let user = await selectUser(email, client);
    if (!user) {
      const idForNewUser = await selectNextIdForUser(client);
      const idHash = new HashIds(process.env.ID_HASH_SALT, 10).encode(idForNewUser);
      user = await insertUser(email, idForNewUser, idHash, client);
    }

    const idea = await insertIdea(title, description, context, user.id, client);

    await client.query('COMMIT');
    client.release();

    return { idea, user: { idHash: user.id_hash, email: user.email } };
  } catch (error) {
    await client.query('ROLLBACK');
    client.release();
    throw error;
  }
}

/**
 * @description Function used to the idea into DB
 * @param {String} title
 * @param {String} description
 * @param {String} context
 * @param {Number} userId
 * @param {Object} client
 * @returns {Object}
 */
async function insertIdea(title, description, context, userId, client) {
  const queryParameters = [
    title,
    description,
    context,
    userId
  ];
  const queryResults = await client.query(`
  INSERT INTO idea (title, description, context, user_id)
  VALUES ($1, $2, $3, $4)
  RETURNING title, description, context, id, upvotes;
  `, queryParameters);

  return queryResults.rows[0];
}

/**
 * @description Function used to insert a user
 * @param {String} email
 * @param {Number} id
 * @param {String} idHash
 * @param {Object} client
 * @returns {Object}
 */
async function insertUser(email, id, idHash, client) {
  const queryParameters = [
    email,
    id,
    idHash
  ];
  const queryResults = await client.query(`
  INSERT INTO app_user (email, id, id_hash)
  VALUES ($1, $2, $3)
  RETURNING *;
  `, queryParameters);

  return queryResults.rows[0];
}

/**
 * @description Function that executes the select ideas query;
 * the function is programmed to return up to 10 at time,
 * given the requirements at the time of implementation
 * @param {Number} idForLastIdeaSeen
 * @returns {Array}
 */
async function selectIdeas(idForLastIdeaSeen) {
  const queryParameters = [
    idForLastIdeaSeen
  ];
  const queryResults = await db.query(`
  SELECT description, context, title, id FROM idea
  WHERE id < $1
  ORDER BY id DESC
  LIMIT 10;
  `, queryParameters);

  return queryResults.rows;
}

/**
 * @description Function used to select the next id for a user
 * @param {Object} client
 * @returns {Number}
 */
async function selectNextIdForUser(client) {
  const queryResults = await client.query(`
  SELECT nextval(pg_get_serial_sequence('app_user', 'id')) AS new_id;
  `);

  return queryResults.rows[0].new_id;
}

/**
 * @description Function used to select a user by email
 * @param {String} email
 * @param {Object} client
 * @returns {Object}
 */
async function selectUser(email, client) {
  const queryParameters = [
    email
  ];
  const queryResults = await client.query(`
  SELECT * FROM app_user
  WHERE email = $1;
  `, queryParameters);

  return queryResults.rows[0];
}

/**
 * @description Function used to update the upvotes column for an idea
 * @param {Number} ideaId
 * @param {Boolean} increment
 * @returns {}
 */
async function updateIdeaUpvotes(ideaId, increment = true) {
  const queryParameters = [ideaId];
  
  await query(`
  UPDATE idea
  SET upvotes = ${increment ? 'upvotes + 1' : 'upvotes - 1'}
  WHERE id = $1;
  `, queryParameters);
}

/**
 * @description Function used to increment user referral count
 * @param {String} userIdHash
 * @returns {}
 */
async function updateUserReferralCount(userIdHash) {
  const queryParameters = [
    userIdHash
  ];
  
  await query(`
  UPDATE app_user
  SET referral_visit_count = referral_visit_count + 1
  WHERE id_hash = $1;
  `, queryParameters);
}

module.exports = {
  executeCreateIdeaTransaction,
  selectIdeas,
  updateIdeaUpvotes,
  updateUserReferralCount
};

const {
  executeCreateIdeaTransaction,
  selectIdeas,
  updateIdeaUpvotes
} = require('./idea.queries');
const expressValidator = require('express-validator');

/**
 * @description Middleware for creating idea
 */
async function createIdea(req, res, next) {
  try {
    const { email, title, description, context } = req.body;
    const results = await executeCreateIdeaTransaction(email, title, description, context);
    res.status(201).json({ results });
  } catch (error) {
    next(error);
  }
}

/**
 * @description Middleware for getting ideas
 */
async function getIdeas(req, res, next) {
  try {
    // lid: last id for last idea seen; used for security and as a shortcut
    const lidFromUrl = req.query.lid;
    /**
     * HACK: null is passed in on load, and it essentially tells
     * the back-end to start from the newest/most recently added
     * idea.
     */
    const lid = lidFromUrl === 'null' ? 1000000 : lidFromUrl;
    res.json({ results: await selectIdeas(lid) });
  } catch (error) {
    next(error);
  }
}

/**
 * @description Function used as GENERIC VALIDATION ERROR HANDLER;
 * long term, this is not the best solution, as messages may
 * need to be custom, but for now, they will do.
 */
function handleValidationErrors(req, res, next) {
  const validationResult = expressValidator.validationResult(req)
  const validationErrorsExist = !validationResult.isEmpty();

  if (validationErrorsExist) {
    const validationError = new Error('Missing properties from request');
    validationError.status = 400;
    next(validationError);
  } else {
    next();
  }
}

/**
 * @description Middleware to handle upvoting idea
 */
async function upvoteIdea(req, res, next) {
  try {
    const { ideaId } = req.params;
    await updateIdeaUpvotes(parseInt(ideaId));
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createIdea,
  getIdeas,
  handleValidationErrors,
  upvoteIdea
};
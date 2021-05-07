const { check } = require('express-validator');
const {
  createIdea,
  downvoteIdea,
  handleValidationErrors,
  getIdeas,
  incrementReferralCount,
  upvoteIdea
} = require('./idea.middleware');
const router = require('express').Router();

/**
 * @description Endpoint for getting ideas
 */
router.get(
  '/ideas',
  getIdeas
);

/**
 * @description Endpoint for creating an idea
 */
router.post(
  '/ideas',
  [
    check('email').isEmail(),
    check('title').isString(),
    check('description').isString(),
    check('context').isString()
  ],
  handleValidationErrors,
  createIdea
);

/**
 * @description Endpoint for upvoting an idea
 */
router.put(
  '/ideas/:ideaId/upvote',
  upvoteIdea
);

/**
 * @description Endpoint for down voting an idea
 */
router.put(
  '/ideas/:ideaId/downvote',
  downvoteIdea
);

/**
 * @description Endpoint for updating referral count for a user
 */
router.put(
  '/users',
  [
    check('ref').isString()
  ],
  handleValidationErrors,
  incrementReferralCount
);

module.exports = router;
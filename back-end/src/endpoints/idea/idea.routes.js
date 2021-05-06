const { check } = require('express-validator');
const { createIdea, handleValidationErrors, upvoteIdea } = require('./idea.middleware');
const router = require('express').Router();

/**
 * @description Endpoint for creating an idea
 */
router.post(
  '/idea',
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
  '/idea/:ideaId',
  upvoteIdea
);

module.exports = router;
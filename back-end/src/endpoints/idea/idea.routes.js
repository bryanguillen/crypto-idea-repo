const { check } = require('express-validator');
const { createIdea, handleValidationErrors } = require('./idea.middleware');
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

module.exports = router;
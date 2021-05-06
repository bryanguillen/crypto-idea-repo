const { executeCreateIdeaTransaction } = require('./idea.queries');
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

module.exports = {
  createIdea,
  handleValidationErrors
};
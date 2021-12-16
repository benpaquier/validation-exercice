const { body } = require("express-validator")

const validations = [
  body('name')
    .exists().withMessage('name is required')
    .isLength({ min: 4 }).withMessage('name is too short'),
  body('password')
    .exists().withMessage('password is required')
    .isLength({ min: 8 }).withMessage('password is too short'),
  body('city')
    .isIn(["Tokyo", "Paris", "Los Angeles"]).withMessage('city is invalid'),
]

module.exports = validations
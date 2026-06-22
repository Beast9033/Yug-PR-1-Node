import { body } from 'express-validator'

const registerValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required'),

    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Enter proper email'),

    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters')
        .isStrongPassword()
        .withMessage('Please enter strong password'),

    body('confirmPassword')
        .notEmpty()
        .withMessage('Confirm password is required')
]

export const loginValidation = [
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Enter proper email'),

    body('password')
        .notEmpty()
        .withMessage('Password is required')
]

export const bookValidation = [
    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required'),

    body('author')
        .trim()
        .notEmpty()
        .withMessage('Author is required'),

    body('price')
        .notEmpty()
        .withMessage('Price is required')
        .isFloat({ min: 0 })
        .withMessage('Price must be a positive number'),

    body('stock')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Stock must be a non-negative integer')
]

export default registerValidation;

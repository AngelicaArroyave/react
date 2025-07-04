import { Router } from 'express'

import { createUser, loginUser, renewToken } from '../controllers/auth.js'
import { check } from 'express-validator'
import { fieldsValidators } from '../middlewares/fields-validators.js'

const authRouter = Router()

authRouter.post('/new', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('name', 'Name must be at least 3 characters long').isLength({ min: 3 }),
    check('email', 'Email must be a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    fieldsValidators
], createUser)

authRouter.post('/', [
    check('email', 'Email is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    fieldsValidators
], loginUser)

authRouter.get('/renew', renewToken)

export default authRouter
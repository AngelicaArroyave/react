import { validationResult } from 'express-validator'
import { request, response } from 'express'

export const fieldsValidators = (req = request, res = response, next = next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next()
}
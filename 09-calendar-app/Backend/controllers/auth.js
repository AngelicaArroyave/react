import { response } from 'express'

export const createUser = (req = request, res = response) => {
    const { name, email, password } = req.body

    res.status(201).json({
        ok: true,
        message: 'Registered',
        name,
        email,
        password
    })
}

export const loginUser = (req = request, res = response) => {
    const { email, password } = req.body

    res.status(200).json({
        ok: true,
        message: 'Logged in',
        email,
        password
    })
}

export const renewToken = (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        message: 'Renew'
    })
}
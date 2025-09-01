import { response } from 'express'
import bcrypt from 'bcryptjs'

import { generateJWT } from '../helpers/jwt.js'
import { User } from '../models/User.js'

export const createUser = async (req = request, res = response) => {
    const { name, email, password } = req.body

    try {
        let user = await User.findOne({ email })

        if(user) {
            return res.status(400).json({
                ok: false,
                message: 'User already exists'
            })
        }

        user = new User(req.body)
        const salt = bcrypt.genSaltSync()

        user.password = bcrypt.hashSync(password, salt)
    
        await user.save()

        const token = await generateJWT(user.id, user.name)
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
    } catch (error) {
        console.log("🚀 ~ createUser ~ error:", error)
        res.status(500).json({
            ok: false,
            message: 'Error registering user'
        })
    }
}

export const loginUser = async (req = request, res = response) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if(!user) {
            return res.status(400).json({
                ok: false,
                message: 'User already exists'
            })
        }

        const validPassword = bcrypt.compareSync(password, user.password)

        if(!validPassword) {
            return res.status(400).json({
                ok: false,
                message: 'Invalid password'
            })
        }

        const token = await generateJWT(user.id, user.name)

        res.status(200).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
    } catch (error) {
        console.log("🚀 ~ loginUser ~ error:", error)
        res.status(500).json({
            ok: false,
            message: 'Error logging in'
        })
    }
}

export const renewToken = async (req = request, res = response) => {
    const { uid, name } = req
    const token = await generateJWT(uid, name)

    res.status(200).json({
        ok: true,
        message: 'Renew',
        uid,
        name,
        token
    })
}
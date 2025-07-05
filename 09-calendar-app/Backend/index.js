import { dbConnection } from './database/config.js'
import authRouter from './routes/auth.js'
import cors from 'cors'
import dotenv from 'dotenv/config'
import express from 'express'

const PORT = process.env.PORT
const app = express()

dbConnection()

app.use(cors())

app.use(express.static('public'))
app.use(express.json())
app.use('/api/auth', authRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
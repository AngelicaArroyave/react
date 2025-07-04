import authRouter from './routes/auth.js'
import express from 'express'
import dotenv from 'dotenv/config'

const app = express()
const PORT = process.env.PORT

app.use(express.static('public'))
app.use(express.json())
app.use('/api/auth', authRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
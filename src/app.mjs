import './env.mjs'
import express from 'express'
import passport from 'passport'
import session from 'express-session'
import cors from 'cors'
import router from './routes/index.mjs'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import { configurePassport } from './config/passport.mjs'
import { corsOptions } from './config/cors.mjs'
import { sessionOptions } from './config/session.mjs'
import { errorHandler, notFound } from './middleware/errorHandler.mjs'
import { connectDB } from './db.mjs'

const PORT = process.env.PORT || 3000
const app = express()

try {
    await connectDB()
} catch (error) {
    console.error('Failed to connect to database:', error)
}


configurePassport(passport)

app.use(cors(corsOptions))
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(session(sessionOptions))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())
app.use(morgan('tiny'))
app.use(express.json())

app.use(router)
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


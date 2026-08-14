import express from 'express'
import { registrationHandler } from '../controllers/registration.mjs'

const registrationRouter = express.Router()

registrationRouter.route('/')
    .post(registrationHandler)

export default registrationRouter
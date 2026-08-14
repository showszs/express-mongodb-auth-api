import express from 'express'
import { logoutHandler } from '../controllers/logout.mjs'

const logoutRouter = express.Router()

logoutRouter.route('/')
    .post(logoutHandler)

export default logoutRouter
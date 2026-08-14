import express from 'express'
import { getMeHandler } from '../controllers/me.mjs'

const meRouter = express.Router()

meRouter.route('/')
    .get(getMeHandler)

export default meRouter
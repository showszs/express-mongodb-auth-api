import express from 'express'
import passport from 'passport'
import { loginHandler } from '../controllers/login.mjs'

const loginRouter = express.Router()

loginRouter.route('/')
    .post(passport.authenticate('local'), loginHandler)

export default loginRouter
import express from 'express'
import registrationRouter from './registration.mjs'
import loginRouter from './login.mjs'
import logoutRouter from './logout.mjs'
import meRouter from './me.mjs'
import profilesRouter from './profiles.mjs'

const router = express.Router()


router.use('/registration', registrationRouter)
router.use('/login', loginRouter)
router.use('/logout', logoutRouter)
router.use('/me', meRouter)
router.use('/profiles', profilesRouter)

export default router

import express from 'express'
import { deleteProfilesHandler, getProfilesHandler } from '../controllers/profiles.mjs'

const profilesRouter = express.Router()

profilesRouter.route('/')
    .get(getProfilesHandler)


profilesRouter.route('/:userId')
    .delete(deleteProfilesHandler)


export default profilesRouter
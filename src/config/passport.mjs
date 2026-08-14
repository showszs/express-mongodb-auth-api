import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'
import { User } from '../models/userSchema.mjs'

export const configurePassport = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user._id.toString())
    })

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id)
            done(null, user)
        } catch (error) {
            done(error)
        }
    })
    passport.use(
        new LocalStrategy({ usernameField: 'login' }, async (login, password, done) => {
            try {
                const user = await User.findOne({ login })

                if (!user) {
                    return done(null, false, { message: 'Invalid data' })
                }

                const isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    return done(null, false, { message: 'Invalid data' })
                }
                return done(null, user)
            } catch (error) {
                return done(error)
            }
        })
    )
}
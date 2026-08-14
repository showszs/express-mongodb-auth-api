import { User } from '../models/userSchema.mjs'

export const registrationHandler = async (req, res, next) => {
    try {
        const { login, password, email } = req.body

        const existingUser = await User.findOne({ login })
        if (existingUser) {
            return res.status(409).json({ message: 'User with this login already exists' })
        }

        const newUser = await User.create({ login, password, email })


        req.login(newUser, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Registration succeeded but login failed' })
            }
            res.status(201).json({ message: 'User registered successfully' })
        })
    } catch (error) {
        next(error)
    }
}

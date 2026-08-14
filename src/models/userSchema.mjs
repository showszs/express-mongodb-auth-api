import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
    {
        login: { type: String, required: true, unique: true },
        email: String,
        password: { type: String, required: true },
    },
    {
        timestamps: true
    }
)

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(10)
            this.password = await bcrypt.hash(this.password, salt)
        } catch (err) {
            return next(err)
        }
    }
    next()
})
export const User = mongoose.model('User', userSchema)

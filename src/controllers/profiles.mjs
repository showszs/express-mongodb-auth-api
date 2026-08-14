import { User } from '../models/userSchema.mjs'
import mongoose from 'mongoose'

export const getProfilesHandler = async (req, res) => {
    try {
        const users = await User.find({}, { login: 1, email: 1 })
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: 'Failed to get Users' })
    }
}

export const deleteProfilesHandler = async (req, res) => {
    const { userId } = req.params

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user id' })
    }

    try {
        const result = await User.deleteOne({ _id: userId })

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json({ message: 'User deleted successfully' })
    } catch (err) {
        console.error('Error deleting user:', err)
        res.status(500).json({ message: 'Failed to delete user' })
    }
}
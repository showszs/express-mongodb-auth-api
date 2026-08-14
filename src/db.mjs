import mongoose from 'mongoose'
import { dbConfig } from './config/dbConfig.mjs'

let db

export async function connectDB() {
    if (db) return db

    try {
        const connection = await mongoose.connect(dbConfig.uri, dbConfig.options)
        console.log('Connected to Database')
        db = connection.connection.db
        return db
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
        throw error
    }
}
import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    UserName: { 
        type: String,
        unique: true
    },
    Email: {
        type: String, 
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Telephone: {type: String},
    UserPhoto: {type: String},
    City: {type: Number},
}, {
    // timestamps: true,
    versionKey: false
})


userSchema.statics.encryptPassword = async (Password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(Password, salt)
}

userSchema.statics.comparePassword = async (Password, receivedPassword) => {
    return await bcrypt.compare(Password, receivedPassword)
}

export default model('User', userSchema)
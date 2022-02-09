const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    full_name: String,
    password: String,
    email: String,
    profile_image: String

}, { versionKey: false, timestamps: true })

module.exports = mongoose.model('user', UserSchema)
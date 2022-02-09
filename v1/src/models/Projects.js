const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({

    name: String

    /*user_id: {
        type: mongoose.Mongoose.Types.ObjectId,
        ref: 'user'
    }*/

}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('project', ProjectSchema)
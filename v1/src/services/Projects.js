const Project = require('../models/Projects')


//model üzerinden kayıt işlemi gerçekleştirmek için bir ara kattır
const insert = (projectData) => {


    const project = new Project(projectData)


    return project.save()
}

const list = () => {

    return Project.find()

}

module.exports = { insert, list }
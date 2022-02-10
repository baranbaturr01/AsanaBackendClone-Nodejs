const Project = require('../models/Projects')


//model üzerinden kayıt işlemi gerçekleştirmek için bir ara kattır
//model üzerinden b,ir işlem alır yani sadec mongo işlemleri burada yapılır
const insert = (projectData) => {


    const project = new Project(projectData)


    return project.save()
}

const list = () => {

    return Project.find({}).populate({
        path: 'user_id',
        select: 'full_name email'
    })

}

module.exports = { insert, list }
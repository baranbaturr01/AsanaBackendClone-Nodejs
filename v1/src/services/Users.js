const User = require('../models/Users')


//model üzerinden kayıt işlemi gerçekleştirmek için bir ara kattır
//model üzerinden b,ir işlem alır yani sadec mongo işlemleri burada yapılır
const insert = (data) => {

    const user = new User(data)

    return user.save()

}

const list = () => {

    return User.find({})

}

const loginUser = (loginData) => {

    return User.findOne(loginData)

}


module.exports = { insert, list, loginUser }
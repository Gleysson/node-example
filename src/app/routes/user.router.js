const router = require('express').Router()
const { UserController } = require('../controllers')
const { Validator, Hash } = require('../middlewares')

class UserRouter{

    constructor(){
        this.path = '/users'
        this.routes()
    }

    routes(){
        router.route(this.path)
        .get(UserController.findAll)
        .post(Validator.userValidator, Hash.passwordHash, UserController.create)

        router.route(`${this.path}/:id_user`)
        .put(Validator.userValidator, Hash.passwordHash, UserController.updateByID )
        .delete(UserController.deleteByID)
    }
}

new UserRouter()
module.exports = router

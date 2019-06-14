const router = require('express').Router()
const { TaskController }  = require('../controllers')
const { Validator } = require('../middlewares')

class TaskRouter{

    constructor(){
        this.path = '/users/:id_user/tasks'
        this.initRouter()
    }

    initRouter(){
        router.route(this.path)
        .get(TaskController.findByUser)
        .post(Validator.taskValidator, TaskController.create)

        router.route(`${this.path}/:id_task`)
        .put(Validator.taskValidator, TaskController.updateByID)
        .delete(TaskController.deleteByID)
    }
}

new TaskRouter()
module.exports = router
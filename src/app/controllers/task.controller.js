const { Task }  = require('../models')

class TaskController {

    // -> create 
    async create(req, res){
      try {
          const id_user = req.params.id_user
          const {description, status} = req.body

          const data =  await Task.create({id_user, description, status})
          res.status(200).json(data)

      } catch (error) {
        res.status(500).json({
            error: error.name, 
            message:"Ops! Create Tasks Fail.. :(" 
        })
      }
    }

    // -> ready
    async findByUser(req, res){
      try {
        const data = await Task.findAll({where: {id_user: req.params.id_user}})
        res.status(200).json(data)

      } catch (error) {
        res.status(500).json({
          error: error.name, 
          message:"Ops! Find Tasks Fail.. :(" 
        })
      }  
    }

    // -> delete
    async deleteByID(req, res){
      try {
        await Task.destroy({ where:{ id: req.params.id_task, id_user: req.params.id_user }});
        res.status(200).json({msg: 'Task removed sucessfully'})

      } catch (error) {
        res.status(500).send({
          error: error.name, 
          message:"Ops! Find Tasks Fail.. :(" 
        })
      }  
    }

    // -> update
    async updateByID(req, res){
      try {
        await Task.update(req.body, {where: {id: req.params.id_task, id_user: req.params.id_user }})
        res.status(200).json({msg: 'Task updated sucessfully'})

      } catch (error) {
        res.status(500).send({
          error: error.name, 
          message:"Ops! Find Tasks Fail.. :(" 
        })
      }  
    }


} // end

module.exports = new TaskController()
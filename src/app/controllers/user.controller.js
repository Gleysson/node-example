const { User }  = require('../models')

class UserController {

    // -> create
    async create(req, res){     
        try {
            const data = await User.create(req.body)
            res.status(200).json(data)

        } catch (error) {
            res.status(500).send({
                error: error.name, 
                message:"Ops! Create Users Fail.. :(" 
            })
        }
    }

    // -> ready
    async findAll(req, res){
      try {
        const data = await User.findAll()
        res.status(200).json(data)

      } catch (error) {
        res.status(500).json({
            error: error.name, 
            message:"Ops! Find Users Fail.. :(" 
        })
      }  
    }

    // -> delete
    async deleteByID(req, res){
      try {

        await User.destroy({ where:{ id: req.params.id_user } });
        res.status(200).json({ msg: 'User removed sucessfully!' })

      } catch (error) {
        res.status(500).json({
            error: error.name, 
            message:"Ops! Remove Users Fail.. :(" 
        })
      }  
    }

    // -> update
    async updateByID(req, res){
      try {

        await User.update(req.body, {where: {id: req.params.id_user }})
        res.status(200).json({ msg: 'User updated sucessfully!' })

      } catch (error) {
        res.status(500).json({
            error: error.name, 
            msg:"Ops! Update Users Fail.. :(" 
        })
      }  
    }


} // end

module.exports = new UserController()
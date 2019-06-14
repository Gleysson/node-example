
class Validator{

    userValidator(req,res,next){

       req.assert('name', 'Field name is required!').notEmpty();
       req.assert('email', 'Field email is required!').notEmpty();
       req.assert('password', 'Field password is required!').notEmpty();
       req.assert('email', 'Field email is invalid!').isEmail();
       
       var err = req.validationErrors();
       
       if(err){
           res.status(400).json(err)
           return;
       }

       next()
    }


    taskValidator(req,res,next){

        req.assert('description', 'Field description is required!').notEmpty();
        req.assert('status', 'Field status is required!').notEmpty();

        var err = req.validationErrors();
        
        if(err){
            res.status(400).json(err)
            return;
        }
 
        next()
     }

}



module.exports = new Validator()
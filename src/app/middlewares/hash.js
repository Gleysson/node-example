const bcrypt = require('bcrypt');

class Hash{

    constructor(){
        this.passwordHash = this.passwordHash.bind(this);
    }

    encrypt(password){
        return bcrypt.hash(password, 10);
    }

    async passwordHash(req,res,next){ 
        req.body.password = await this.encrypt(req.body.password)
        next()
    }
}

module.exports = new Hash()
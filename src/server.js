require("dotenv-safe").config({ 
    allowEmptyValues: true,
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env' 
});
  
const app = require('./app');

class Server{
    constructor(){
        this.port = process.env.PORT || 5000;
        this.onServer()
    }

    onServer(){
        app.listen(this.port,() => {
            console.log('Server is running on port:',this.port);
        })
    }
}

new Server();

const morgan = require('morgan')
const express = require('express')
const { Http } = require('./app/middlewares')
const expressValidator = require('express-validator')
const { UserRouter, TaskRouter } = require('./app/routes')

class App {
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(Http)
        this.app.use(morgan('dev'))
        this.app.use(express.json())        
        this.app.use(expressValidator())
        this.app.use(express.urlencoded({extended:false})) 
    }

    routes(){
        this.app.use('/api/v1', [
            TaskRouter,
            UserRouter
        ])
    }

}

module.exports = new App().app

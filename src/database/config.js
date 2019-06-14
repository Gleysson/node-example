require("dotenv-safe").config({ 
  allowEmptyValues: true,
  path: process.env.NODE_ENV =='test' ? '.env.test' : '.env'
});

module.exports = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT || 'mysql',
  storage: './__tests__/database/database.sqlite',
  operatorsAliases: false,
  define:{
    timestamps: true,
    underscored: true,
    underscoredAll:true
  }
}
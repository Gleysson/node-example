class User {
    initModule(sequelize, DataTypes){
        return sequelize.define('User', {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        });
    }
}

module.exports = new User().initModule


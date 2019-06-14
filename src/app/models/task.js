class Task {
    initModule(sequelize, DataTypes){
        return sequelize.define('Task', {
            description: DataTypes.STRING,
            status: DataTypes.STRING,
            id_user: DataTypes.INTEGER
        });
    }
}

module.exports = new Task().initModule


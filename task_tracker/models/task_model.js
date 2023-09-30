const { DataTypes } = require('sequelize');
function model(sequelize) {
    return sequelize.define('Task',{
        taskId:{ type: DataTypes.STRING, allowNull: false, primaryKey: true,
        },
        status:{type:DataTypes.STRING, allowNull:false},
        title:{type:DataTypes.STRING, allowNull:false},
        details:{type:DataTypes.STRING},
        date:{type:DataTypes.DATE, allowNull:false},
        status:{type:DataTypes.STRING, allowNull:false},
        user:{type:DataTypes.STRING, allowNull:false},
        timeline:{type:DataTypes.DATE, allowNull:false}
    },{
        indexes: [
            // Create a unique index on email
            {
              unique: true,
              fields: ['taskId'],
              
            }]
    });
}

module.exports = model;

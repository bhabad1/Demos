const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');


initialize();

async function initialize() {
    // create db if it doesn't already exist
    try {
        const { host, port, user, password, database , socketPath} = config.database;
        const connection =  await mysql.createConnection({  port, user, password, socketPath });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    
        // connect to db
        const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' ,dialectOptions: {
            socketPath
          }});
    
        // init models and add them to the exported db object
        db.Task = require('../models/task_model.js')(sequelize);
    
        // sync all models with database
        await sequelize.sync({ alter: true });
    } catch (error) {
        console.log("Error>>>>>>>>>>>>>>>>>>: ", error)
    }
   
}

module.exports = db = {};

const db = require('helpers/db');
const { Sequelize, Op } = require('sequelize');

async function getAll(page, limit){
    const offset = ((page) - 1) * limit;

    const tasks =  await db.Task.findAll({offset, limit});
    const total = await db.Task.count();

    return {
        page,
        limit,
        total,
        total_pages:Math.ceil(total/limit),
        data:tasks
    }
}

async function create(params) {
    const task = new db.Task(params);
    await task.save();
}

async function update(id, params) {
    const task = await getTask(id);
    Object.assign(task, params);
    await task.save();
}

async function getTask(id) {
    const task = await db.Task.findByPk(id);
    if (!task) throw 'Task not found';
    return task;
}

async function getMetrics(params){
let whereObj={}, queryObj={};
let resObj = {};

if(params.date||params.status){
    if(params.status){
        whereObj["status"] = params.status;
    }
    if(params.date){
        whereObj["timeline"]  = {
            [Op.lte] :new Date(params.date)
        }
        resObj['date'] = new Date(params.date);
    }
    queryObj["where"] = whereObj;
}
queryObj["attributes"] = ["status","timeline",
[Sequelize.fn("COUNT", Sequelize.col('status')),"count"]
];
queryObj["group"] = ["status"];
queryObj["raw"] = true;

const task = await db.Task.findAll(queryObj);
if (!task) throw 'Task not found';

resObj["metrics"] = task.reduce((obj,item)=>{
    obj[item.status +"_tasks"]+= item.count;
    return obj

}, {"open_tasks":0, "ongoing_tasks":0, "completed_tasks":0});



return resObj;

}


module.exports = {
    getAll,
    getMetrics,
    create,
    update
}


const taskService = require('services/task_service');

let taskCtrl = {};
taskCtrl.allTasks = (req,res,next)=>{
    try {
        const page = (req.query.page) || 1;
        const limit = req.query.limit || 10;

        taskService.getAll(Number(page), Number(limit)) .then(tasks => res.json(tasks))
        .catch(next);
    } catch (error) {
        next(error)
    }
}

taskCtrl.taskMetrics = (req,res,next)=>{
    try {
        let {date, status} = req.query ||{};
        taskService.getMetrics({date, status}).then(tasks => res.json(tasks))
        .catch(next);
    } catch (error) {
        next(error)
    }
}

taskCtrl.createTask = (req,res,next)=>{
    try {
        taskService.create(req.body)
        .then(() => res.json({ message: 'Task created' }))
        .catch(next);
    } catch (error) {
        next(error)
    }
}
taskCtrl.updateTask = (req,res,next)=>{
    try {
        taskService.update(req.params.taskId, req.body)
        .then(() => res.json({ message: 'Task updated' }))
        .catch(next);
        
    } catch (error) {
        next(error)
    }
}


module.exports = taskCtrl;
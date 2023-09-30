var express = require('express');
var router = express.Router();
const taskCtrl = require('controllers/task_controller');


/* GET users listing. */
router.get('/',taskCtrl.allTasks);

router.get('/metrics', taskCtrl.taskMetrics)

router.post('/',taskCtrl.createTask)

router.put('/:taskId', taskCtrl.updateTask);
 


module.exports = router;

var express = require('express');
var router = express.Router();
const {
  task_create_post,
  task_delete,
  task_moveUp_post,
  task_moveDown_post,
  tasks_get
} = require('../controllers/tasksController');


router.get('/tasks',tasks_get);
router.post('/task',task_create_post);
router.delete('/task/:id',task_delete);
router.post('/moveTaskUp',task_moveUp_post);
router.post('/moveTaskDown',task_moveDown_post);

module.exports = router;

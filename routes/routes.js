var express = require('express');
var router = express.Router();

var controllers = require('../controllers');

/* GET home page. */
router.get('/', controllers.homeController.index);

/* Routs Tasks */
router.get('/tasks', controllers.tasksController.getTasks);
router.get('/tasks/new', controllers.tasksController.getNewTask);
router.post('/tasks/new', controllers.tasksController.postNewTask);
router.post('/tasks/delete', controllers.tasksController.deleteTask);
router.get('/tasks/update/:id', controllers.tasksController.getUpdateTask);
router.post('/tasks/update', controllers.tasksController.postUpdateTask);

module.exports = router;

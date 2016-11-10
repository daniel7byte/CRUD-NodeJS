var express = require('express');
var router = express.Router();

var controllers = require('../controllers');

/* GET home page. */
router.get('/', controllers.homeController.index);

/* Routs Tasks */
router.get('/tasks', controllers.tasksController.getTasks);
router.get('/tasks/new', controllers.tasksController.getNewTask);
router.post('/tasks/new', controllers.tasksController.postNewTask);

module.exports = router;

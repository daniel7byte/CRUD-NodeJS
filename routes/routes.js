var express = require('express');
var router = express.Router();

var controllers = require('../controllers');

/* GET home page. */
router.get('/', controllers.homeController.index);

/* Routs Tasks */
router.get('/tasks', controllers.tasksController.getTasks);

module.exports = router;

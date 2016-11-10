// tasksController

var mysql = require('mysql');

module.exports = {
  getTasks : function(req, res, next) {
    var config = require('../database/config');
    var db = mysql.createConnection(config);
    db.connect();
    db.query('SELECT * FROM tasks', function(err, rows, fields){
      if(err) throw err;
      tasks = rows;
      db.end();
      res.render('tasks/tasks', {title: 'Lista de Tareas', tasks : tasks})
    });
  },

  getNewTask : function(req, res, next){
    res.render('tasks/new', {title: 'Nueva Tarea'});
  },

  postNewTask : function(req, res, next){
    console.log(req.body);
  }
}

// tasksController

var mysql = require('mysql');
var dateFormat = require('dateformat');

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

    var fechaActual = new Date();
    var fecha = dateFormat(fechaActual, 'yyyy-mm-dd h:MM:ss');

    var task = {
      title : req.body.title,
      description : req.body.description,
      status : req.body.optionsStatus,
      priority : req.body.optionsPriority,
      date : req.body.date,
      created : fecha,
      modified : fecha
    }

    var config = require('../database/config');
    var db = mysql.createConnection(config);
    db.connect();
    db.query('INSERT INTO tasks SET ?', task, function(err, rows, fields){
      if(err) throw err;
      db.end();
      res.render('tasks/new', {title: 'Nueva Tarea', info: 'Producto creado correctamente'});
    });
  }
}

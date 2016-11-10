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
      var tasks = rows;
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
  },

  deleteTask : function(req, res, next){
    var id = req.body.id;
    var respuesta = false;
    var config = require('../database/config');
    var db = mysql.createConnection(config);
    db.connect();
    db.query('DELETE FROM tasks WHERE id = ?', id, function(err, rows, fields){
      if(err) throw err;
      db.end();
      respuesta = true;
      res.json(respuesta);
    });
  },

  getUpdateTask : function(req, res, next) {
    var config = require('../database/config');
    var db = mysql.createConnection(config);
    var task = null;
    db.connect();
    db.query('SELECT * FROM tasks WHERE id = ?', req.params.id, function(err, rows, fields){
      if(err) throw err;
      task = rows[0];
      db.end();
      res.render('tasks/update', {title: task.title + ' - Task', task : task})
    });
  },

  postUpdateTask : function(req, res, next) {
    var fechaActual = new Date();
    var fecha = dateFormat(fechaActual, 'yyyy-mm-dd h:MM:ss');

    var id = req.body.id;

    var task = {
      title : req.body.title,
      description : req.body.description,
      status : req.body.optionsStatus,
      priority : req.body.optionsPriority,
      date : req.body.date,
      modified : fecha
    }

    var config = require('../database/config');
    var db = mysql.createConnection(config);

    db.connect();
    db.query('UPDATE  tasks SET ? WHERE id = ?', [task, id], function(err, rows, fields){
      if(err) throw err;
      db.end();
      res.redirect('/tasks');
    });
  }
}

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
      res.render('tasks/tasks', {tasks : tasks})
    });
  }
}

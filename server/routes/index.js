module.exports = function(app){

  var controller = app.controllers.index;

  app.route('/tasks')
    .get(controller.getTasks);

};

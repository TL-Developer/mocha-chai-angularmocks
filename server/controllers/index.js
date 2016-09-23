module.exports = function(app) {

  var controller  = {}
    , Model_Tasks = app.models.index;

  controller.getTasks = function(req, res){
    res.status(200).json(Model_Tasks);
  };

  return controller;

};

var express    = require('express')
  , bodyParser = require('body-parser')
  , consign = require('consign');

module.exports = function(){

  var app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({"extended": true}));

  consign({cwd: 'server', logger: console})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};

var http = require('http')
  , app = require('./app')();

http.createServer(app).listen(3000, function(){
  console.log('Servidor rodando na porta 3000');
});

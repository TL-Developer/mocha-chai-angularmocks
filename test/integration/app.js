var supertest = require('supertest')
  , chai      = require('chai')
  , expect    = chai.expect
  , app       = require('../../app')();

var request = supertest(app);

var model_task = {
  '_id': 1,
  'name': 'viajar',
  'done': false
};

describe('ROTAS', function(){
  describe('Rota de GET /tasks', function(){
    it('deve retornar um status code 200 e uma lista de tasks', function(done) {

      request.get('/tasks').expect(200).end(function(err, res){
        expect(res.body[0]._id).to.be.eql(model_task._id);
        expect(res.body[0].name).to.be.eql(model_task.name);
        expect(res.body[0].done).to.be.eql(model_task.done);
        done(err);
      });
    });
  });
});

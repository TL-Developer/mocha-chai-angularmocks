var expect = require('chai').expect;

describe('Todo Controller', function(){

  var scope, control;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope;
    control = $controller('TodoController', {$scope: scope});
  }));

  describe('Add todos', function(){
    it('Deve adicionar um todo na lista', function(){
      var
    });
  });

});

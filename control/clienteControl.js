var app = angular.module('clienteModule', []);
app.controller('clienteControl', function($scope) {

    $scope.clientes = [{'codigo':'1', 'nome':'Carlos', 'cargo':'Professor', 'endereco':'Rua xxx', 'cidade':'Uberlândia', 'cep':'38400-000', 'pais':'Brasil', 'telefone':'9884-9492'}]
});
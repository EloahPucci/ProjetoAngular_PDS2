var app = angular.module('clienteModule', []);
app.controller('clienteControl', function($scope) {

    $scope.clientes = [{'codigo':'1', 'nome':'Carlos', 'cargo':'Professor', 'endereco':'Rua da Paz',
    'cidade':'Uberlândia', 'cep':'38400-000', 'pais':'Brasil', 'telefone':'9884-9492', 'fax':'2323-2323'},
    {'codigo':'2', 'nome':'Marcos', 'cargo':'Analista', 'endereco':'Rua da Alegria',
    'cidade':'Uberlândia', 'cep':'38400-000', 'pais':'Brasil', 'telefone':'8878-0012', 'fax':'1212-1212'}]

    $scope.salvar = function() {
        $scope.clientes.push($scope.cliente);
        $scope.novo();
    }

    $scope.pesquisar = function() {

    }

    $scope.excluir = function() {
        $scope.clientes.splice($scope.clientes.indexOf($scope.cliente), 1);
        $scope.novo();
    }

    $scope.novo = function() {
        $scope.cliente = {};
    }

    $scope.seleciona = function(cliente) {
        $scope.cliente = cliente;
    }
});
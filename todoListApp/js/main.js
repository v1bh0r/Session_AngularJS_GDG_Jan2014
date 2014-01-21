var app = angular.module('easyDo', ['ngRoute'])
        .value('serviceUrl', 'https://localhost:3000')
        .config(function($routeProvider) {
          $routeProvider
              .when('/', {
                controller:'ListCtrl',
                templateUrl:'view/list.html'
              })
              .when('/edit/:itemId', {
                controller:'EditCtrl',
                templateUrl:'view/detail.html'
              })
              .otherwise({
                redirectTo:'/'
              });
        })
        .controller('ListCtrl', function($scope) {
          $scope.todoList = [{id: _.uniqueId(), description: "Create my first app with Angular", done: false}];

          $scope.removeItem = function(item){
            $scope.todoList = _.reject($scope.todoList, {id: item.id});
          }

          $scope.addItem = function(description){
            $scope.todoList.push({id: _.uniqueId(), description: description, done: false})
            $scope.newTodoDescription = "";
          }
        })
        .controller('EditCtrl', function($scope) {
          $scope.item = {id: 1, description: "Create my first app with Angular", done: false};
        })
    ;

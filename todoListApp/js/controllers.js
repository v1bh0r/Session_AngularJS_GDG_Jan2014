angular.module('easyDo')
    .controller('ListCtrl', function($scope, todoService) {
      $scope.todoList = todoService.all();

      $scope.removeItem = function(item){
        $scope.todoList = todoService.remove(item.id);
      }

      $scope.addItem = function(description){
        todoService.add(description);
        $scope.newTodoDescription = "";
      }
    })
    .controller('ListItemCtrl', function($scope) {
      $scope.item = {id: 1, description: "Create my first app with Angular", done: false};
    })
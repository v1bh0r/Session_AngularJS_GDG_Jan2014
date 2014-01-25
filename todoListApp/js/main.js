var app = angular.module('easyDo', ['ngRoute'])
        .config(function ($routeProvider) {
          $routeProvider
              .when('/', {
                controller: 'ListCtrl',
                templateUrl: 'view/list.html'
              })
              .when('/todo/:itemId', {
                controller: 'ListItemCtrl',
                templateUrl: 'view/detail.html'
              })
              .otherwise({
                redirectTo: '/'
              });
        })
        .factory('todoService', function () {
          var key = "todos";
          var s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
          };
          var uuid = function () {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
          };

          var listItems = [];
          return  {
            add: function (description) {
              listItems.push({id: uuid(), description: description, done: false})
              this.save(listItems);
            },
            all: function () {
              var found = localStorage.getItem(key);
              listItems  = found ? JSON.parse(found) : [];
              return listItems;
            },
            remove: function(id){
              listItems = _.reject(listItems, {id: id});
              this.save(listItems);
              return listItems;
            } ,
            save: function (items) {
              localStorage.setItem(key, JSON.stringify(items));
            }
          }
        })
    ;

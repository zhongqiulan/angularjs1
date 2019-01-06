// 5.定义路由模块
angular.module('mmbApp.route', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'tmps/index-tmp.html',
            controller: 'indexCtrl'
        }).when('/category', {
            templateUrl: 'tmps/category-tmp.html',
            controller: 'categoryCtrl'
        })
    }]);

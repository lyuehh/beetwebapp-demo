'use strict';

angular.module('app', ['ui.router', 'app.navbar', 'app.treedemo'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('index', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
    })
    .state('treedemo', {
        url: '/treedemo',
        templateUrl: 'app/treedemo/treedemo.html',
        controller: 'TreeDemoCtrl',
        controllerAs: 'vm'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'app/main/about.html'
    });
    $urlRouterProvider.otherwise('/');
});

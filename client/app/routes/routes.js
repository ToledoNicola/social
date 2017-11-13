angular.module('app').config(function (
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
) {
    
    $urlRouterProvider.when('','/home');
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('root',{
        abstract: true,
        templateUrl: 'client/app/ui/main.template.html',
        controller: 'appController'
    })
    .state('root.home',{
        url:'/home',
        templateUrl: 'client/app/home/home.template.html',
        controller:'homeController'
    })
    .state('root.members',{
        url:'/members',
        templateUrl: 'client/app/members/members.template.html',
        controller:'membersController'
    })
})
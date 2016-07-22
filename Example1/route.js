var app = angular.module('myApp', [
    'ui.router','ngCart'
]);

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'HomeController as home',
            data: { pageTitle: 'HOME' }
        })
        .state('details', {
            url: '/details/:id',
            templateUrl: 'details.html',
            controller: 'DetailsController as details',
            data: { pageTitle: 'DETAILS' }
        })
        .state('cart', {
            url: '/cart',
            templateUrl: 'addtocart.html',
            controller: 'CartController as cart',
            data: { pageTitle: 'CART' }
        });
}

app.config(config);
var fbconfig = {
    apiKey: "AIzaSyCyD7BY4mljaweM-i5OmNKOg6GTGgcPIHg",
    authDomain: "mypj2-f944c.firebaseapp.com",
    databaseURL: "https://mypj2-f944c.firebaseio.com",
    storageBucket: "mypj2-f944c.appspot.com"
};
firebase.initializeApp(fbconfig);

var app = angular.module('myApp', [
    'ui.router','ngCart','app.directives.product','firebase'
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
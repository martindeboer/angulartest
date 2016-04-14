var app = angular.module('app', ['ui.router']);
app.config(["$stateProvider", "$locationProvider", (stateProvider, locationProvider) => {
        locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        stateProvider
            .state('default', {
            url: '/',
            templateUrl: '/Content/Home.html',
            controller: "HomeController as ctrl"
        });
        stateProvider.state('home', {
            url: '/home',
            templateUrl: '/Content/Home.html',
            controller: "HomeController as ctrl"
        });
        stateProvider.state("otherwise", {
            url: '/',
            templateUrl: '/Content/Home.html',
            controller: "HomeController as ctrl"
        });
    }]);
//# sourceMappingURL=app.js.map
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    var AngularTest;
    (function (AngularTest) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            class HomeController {
                constructor($scope, rootScope, synchronizationService) {
                    this.$scope = $scope;
                    this.rootScope = rootScope;
                    this.synchronizationService = synchronizationService;
                    this.activate();
                }
                activate() {
                    this.palinDromes = ["one", "two", "three", "four", "five"];
                    this.registerCallBacks();
                    this.synchronizationService.start();
                }
                registerCallBacks() {
                    this.rootScope.$on("newPalinDrome", (event, palinDrome) => {
                        this.newPalinDrome(palinDrome);
                    });
                }
                newPalinDrome(palinDrome) {
                    this.rootScope.$apply(() => {
                        this.addPalinDrome(palinDrome);
                    });
                }
                addPalinDrome(palinDrome) {
                    this.palinDromes.push(palinDrome);
                    if (this.palinDromes.length > 20) {
                        this.palinDromes = this.palinDromes.slice(1, this.palinDromes.length - 1);
                    }
                }
            }
            HomeController.$inject = ["$scope", "$rootScope", "SynchronizationService"];
            angular.module("app").controller("HomeController", HomeController);
        })(Controllers = AngularTest.Controllers || (AngularTest.Controllers = {}));
    })(AngularTest = App.AngularTest || (App.AngularTest = {}));
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map
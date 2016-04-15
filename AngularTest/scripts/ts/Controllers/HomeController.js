// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    var AngularTest;
    (function (AngularTest) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            class HomeController {
                constructor($scope, rootScope) {
                    this.$scope = $scope;
                    this.rootScope = rootScope;
                    this.activate();
                }
                activate() {
                    this.palinDromes = [];
                    this.registerCallBacks();
                    // Under normal circumstances I would move this to an overarching project controller
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
                    var newPalinDrome = [palinDrome];
                    var endIndex = Math.min(20, this.palinDromes.length);
                    var buffer = this.palinDromes.slice(0, endIndex);
                    this.palinDromes = newPalinDrome.concat(buffer);
                }
            }
            HomeController.$inject = ["$scope", "$rootScope"];
            angular.module("app").controller("HomeController", HomeController);
        })(Controllers = AngularTest.Controllers || (AngularTest.Controllers = {}));
    })(AngularTest = App.AngularTest || (App.AngularTest = {}));
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map
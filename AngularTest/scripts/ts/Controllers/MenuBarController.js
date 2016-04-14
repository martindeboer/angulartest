// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    var Parking;
    (function (Parking) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            class MenuBarController {
                constructor($scope, rootScope) {
                    this.$scope = $scope;
                    this.rootScope = rootScope;
                    this.activate();
                }
                activate() {
                    alert("menubar enabled");
                }
            }
            MenuBarController.$inject = ["$scope", "$rootScope"];
            angular.module("app").controller("MenuBarController", MenuBarController);
        })(Controllers = Parking.Controllers || (Parking.Controllers = {}));
    })(Parking = App.Parking || (App.Parking = {}));
})(App || (App = {}));
//# sourceMappingURL=MenuBarController.js.map
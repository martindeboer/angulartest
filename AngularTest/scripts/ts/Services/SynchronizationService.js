var App;
(function (App) {
    var AngularTest;
    (function (AngularTest) {
        var Services;
        (function (Services) {
            "use strict";
            class SynchronizationService {
                constructor(rootScope) {
                    this.rootScope = rootScope;
                }
                start() {
                    this.mainHub = $.connection.mainHub;
                    $.connection.hub.start().then(() => {
                        this.mainHub.server.start(1, 100);
                    }, () => {
                        // TODO: error handling
                    });
                    this.mainHub.client.newPalinDrome = (palinDrome) => {
                        this.newPalinDrome(palinDrome);
                    };
                }
                newPalinDrome(palinDrome) {
                    this.rootScope.$broadcast("newPalinDrome", palinDrome);
                }
            }
            SynchronizationService.$inject = ["$rootScope"];
            angular.module("app").service("SynchronizationService", SynchronizationService);
        })(Services = AngularTest.Services || (AngularTest.Services = {}));
    })(AngularTest = App.AngularTest || (App.AngularTest = {}));
})(App || (App = {}));
//# sourceMappingURL=SynchronizationService.js.map
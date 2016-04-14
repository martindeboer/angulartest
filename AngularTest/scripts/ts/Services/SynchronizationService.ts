module App.AngularTest.Services {
    "use strict";

    export interface ISynchronizationService {

        start();
    }

    class SynchronizationService implements ISynchronizationService {
        mainHub;

        static $inject: string[] = ["$rootScope"];

        constructor(
            private rootScope: angular.IRootScopeService
        ) {


        }

        public start() {
            this.mainHub = ($.connection as any).mainHub;

            $.connection.hub.start().then(
                () => {

                    this.mainHub.server.start(1, 100);
                },
                () => {
                    // TODO: error handling

                });

            this.mainHub.client.newPalinDrome = (palinDrome: string) => {
                this.newPalinDrome(palinDrome);
            }

        }

        private newPalinDrome(palinDrome: string) {
            this.rootScope.$broadcast("newPalinDrome", palinDrome);
        }
    }

    angular.module("app").service("SynchronizationService", SynchronizationService);
}
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App.AngularTest.Controllers {
    "use strict";
   

    interface IHomeController {
       
    }

    class VirtualList
    {
        getItemAtIndex(index: number): any
        {
            return null;
        }
        getLength(): number {
            return 0;
        }
    }


    class HomeController implements IHomeController {
        palinDromes: string[];

        static $inject: string[] =
        ["$scope", "$rootScope"];

        constructor(
            private $scope: ng.IScope,
            private rootScope: angular.IRootScopeService
        )
        {
            this.activate();
        }
       
        activate()
        {
            this.palinDromes = [];
            this.registerCallBacks();
            // Under normal circumstances I would move this to an overarching project controller
        }

        registerCallBacks()
        {
            this.rootScope.$on("newPalinDrome", (event, palinDrome: string) => {
                this.newPalinDrome(palinDrome);
            });
        }

        newPalinDrome(palinDrome: string)
        {
            this.rootScope.$apply(() => {
                this.addPalinDrome(palinDrome);
            });
        }

        addPalinDrome(palinDrome: string)
        {
            var newPalinDrome: string[] = [palinDrome];

            var endIndex = Math.min(20, this.palinDromes.length);

            var buffer = this.palinDromes.slice(0, endIndex);
            this.palinDromes = newPalinDrome.concat(buffer);
        }

        cmdStartOnClick()
        {
        }

        cmdStopOnClick()
        {
        }

    }
    angular.module("app").controller("HomeController", HomeController);
}
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App.AngularTest.Controllers {
    "use strict";
   

    interface IHomeController {
        //createRecurringReservation();
    }
     

    class HomeController implements IHomeController {
        palinDromes: string[];

        static $inject: string[] =
        ["$scope", "$rootScope","SynchronizationService"];

        constructor(
            private $scope: ng.IScope,
            private rootScope: angular.IRootScopeService,
            private synchronizationService: App.AngularTest.Services.ISynchronizationService
        )
        {

            this.activate();
        }
       
        activate()
        {
            
            this.palinDromes = ["one","two","three","four","five"];
            this.registerCallBacks();
            this.synchronizationService.start();
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
            this.palinDromes.push(palinDrome);

            if (this.palinDromes.length > 20)
            {
                this.palinDromes = this.palinDromes.slice(1, this.palinDromes.length - 1);
            }
          
        }

    }
    angular.module("app").controller("HomeController", HomeController);
}
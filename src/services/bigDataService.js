///<reference path="../typings/angular2/angular2.d.ts"/>
System.register([], function(exports_1) {
    var BigDataService;
    return {
        setters:[],
        execute: function() {
            BigDataService = (function () {
                function BigDataService() {
                }
                BigDataService.prototype.getBigData = function () {
                    return [1, 2, 3, 4, 5, 6, 7];
                };
                return BigDataService;
            })();
            exports_1("BigDataService", BigDataService);
        }
    }
});

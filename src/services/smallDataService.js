System.register([], function(exports_1) {
    var SmallDataService;
    return {
        setters:[],
        execute: function() {
            SmallDataService = (function () {
                function SmallDataService(bigDataService) {
                    this.myBigDataService = bigDataService;
                }
                SmallDataService.prototype.getSmallData = function () {
                    return this.myBigDataService.getBigData().splice(0, 2);
                };
                return SmallDataService;
            })();
            exports_1("SmallDataService", SmallDataService);
        }
    }
});

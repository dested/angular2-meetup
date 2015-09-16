System.register(["./bigDataService", 'angular2/angular2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var bigDataService_1, angular2_1;
    var SmallDataService;
    return {
        setters:[
            function (bigDataService_1_1) {
                bigDataService_1 = bigDataService_1_1;
            },
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            SmallDataService = (function () {
                function SmallDataService(bigDataService) {
                    this.myBigDataService = bigDataService;
                }
                SmallDataService.prototype.getSmallData = function () {
                    return this.myBigDataService.getBigData().splice(0, 2);
                };
                SmallDataService = __decorate([
                    __param(0, angular2_1.Inject(bigDataService_1.BigDataService)), 
                    __metadata('design:paramtypes', [bigDataService_1.BigDataService])
                ], SmallDataService);
                return SmallDataService;
            })();
            exports_1("SmallDataService", SmallDataService);
        }
    }
});

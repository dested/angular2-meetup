System.register(['angular2/angular2'], function(exports_1) {
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
    var angular2_1;
    var RatingEntry, RatingComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            RatingEntry = (function () {
                function RatingEntry() {
                }
                return RatingEntry;
            })();
            exports_1("RatingEntry", RatingEntry);
            RatingComponent = (function () {
                function RatingComponent() {
                    this.onRate = new angular2_1.EventEmitter();
                }
                RatingComponent.prototype.rateItem = function (count) {
                    this.entry.ratingNumber = count;
                    this.onrate.next(count);
                };
                RatingComponent = __decorate([
                    angular2_1.Component({
                        selector: 'rating',
                        properties: ['entry'],
                    }),
                    angular2_1.View({
                        templateUrl: 'src/components/rating/rating.html',
                        directives: [angular2_1.NgFor, angular2_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RatingComponent);
                return RatingComponent;
            })();
            exports_1("RatingComponent", RatingComponent);
        }
    }
});

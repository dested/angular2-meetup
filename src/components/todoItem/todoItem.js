System.register(['angular2/angular2', '../../directives/forNext'], function(exports_1) {
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
    var angular2_1, forNext_1;
    var TodoItem, TodoItemComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (forNext_1_1) {
                forNext_1 = forNext_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem() {
                }
                return TodoItem;
            })();
            exports_1("TodoItem", TodoItem);
            TodoItemComponent = (function () {
                function TodoItemComponent() {
                }
                TodoItemComponent.prototype.doneEditing = function ($event) {
                    console.log('done editing triggered: ', $event);
                    var which = $event.which;
                    var target = $event.target;
                    if (which === 13) {
                        this.item.name = target.value;
                    }
                };
                TodoItemComponent = __decorate([
                    angular2_1.Component({
                        selector: 'todo-item',
                        properties: ['item']
                    }),
                    angular2_1.View({
                        templateUrl: 'src/components/todoItem/todoItem.html',
                        directives: [forNext_1.ForNextDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoItemComponent);
                return TodoItemComponent;
            })();
            exports_1("TodoItemComponent", TodoItemComponent);
        }
    }
});

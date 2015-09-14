System.register(['angular2/angular2', '../todoItem/todoItem', 'src/pipes/lengthPipe'], function(exports_1) {
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
    var angular2_1, todoItem_1, lengthPipe_1;
    var AppComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (todoItem_1_1) {
                todoItem_1 = todoItem_1_1;
            },
            function (lengthPipe_1_1) {
                lengthPipe_1 = lengthPipe_1_1;
            }],
        execute: function() {
            // Annotation section
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'John Doe';
                    this.names = ['a', 'b', 'c'];
                    this.todoItems = [
                        {
                            name: 'hello',
                            isDone: true
                        }, {
                            name: 'world',
                            isDone: false
                        }, {
                            name: 'foo',
                            isDone: false
                        }, {
                            name: 'bar',
                            isDone: false
                        }
                    ];
                }
                AppComponent.prototype.addNewItem = function () {
                    this.todoItems.push({
                        name: '',
                        isDone: false
                    });
                };
                AppComponent = __decorate([
                    angular2_1.Component({
                        selector: 'app',
                    }),
                    angular2_1.View({
                        templateUrl: 'src/components/app/app.html',
                        pipes: [lengthPipe_1.LengthPipe],
                        directives: [angular2_1.NgFor, todoItem_1.TodoItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            angular2_1.bootstrap(AppComponent);
        }
    }
});

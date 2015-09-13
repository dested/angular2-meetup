///<reference path="../../typings/angular2/angular2.d.ts"/>
import {Component,Directive,NgFor,Pipe, View, bootstrap} from 'angular2/angular2';
import {TodoItemComponent,TodoItem} from '../todoItem/todoItem';
import {LengthPipe} from 'src/pipes/lengthPipe';

// Annotation section
@Component({
    selector: 'app',
})
@View({
    templateUrl: 'src/components/app/app.html',
    pipes: [LengthPipe],
    directives: [NgFor,TodoItemComponent]
})
// Component controller
export class AppComponent {
    name:string;
    names:string[];
    todoItems:TodoItem[];

    constructor() {
        this.name = 'some name';
        this.names = ['a', 'b', 'c'];
        this.todoItems = [
            {
                name: 'hi1',
                isDone: true
            }, {
                name: 'hi2',
                isDone: false
            }, {
                name: 'hi3',
                isDone: false
            }
        ]
    }


    addNewItem() {
        this.todoItems.push({
                name: '',
                isDone: false
            }
        )
    }
}


bootstrap(AppComponent);

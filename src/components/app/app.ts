///<reference path="../../typings/angular2/angular2.d.ts"/>
import {Component,Directive,NgFor,Pipe,View,bootstrap} from 'angular2/angular2';
import {TodoItemComponent,TodoItem} from '../todoItem/todoItem';
import {RatingComponent,RatingEntry} from '../rating/rating';
import {LengthPipe} from 'src/pipes/lengthPipe';
import {ForNextDirective} from '../../directives/forNext';

// Annotation section
@Component({
    selector: 'app',
})
@View({
    templateUrl: 'src/components/app/app.html',
    pipes: [LengthPipe],
    directives: [NgFor, TodoItemComponent, RatingComponent,ForNextDirective]
})
// Component controller
export class AppComponent {
    name:string;
    names:string[];
    ratingEntry:RatingEntry;
    todoItems:TodoItem[];

    constructor() {
        this.ratingEntry=new RatingEntry();
        this.ratingEntry.ratingNumber=2;


        this.name = 'John Doe';
        this.names = ['a', 'b', 'c'];
        this.todoItems = [
            {
                name: 'hello',
                isDone: true
            }, {
                name: 'world',
                isDone: false
            }
        ]
    }

    ratingHappened(){
        alert(this.ratingEntry.ratingNumber);
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

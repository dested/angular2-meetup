///<reference path="../../typings/angular2/angular2.d.ts"/>
import {Component,Directive,NgFor,Pipe,View,bootstrap} from 'angular2/angular2';
import {TodoItemComponent,TodoItem} from '../todoItem/todoItem';
import {RatingComponent,RatingEntry} from '../rating/rating';
import {LengthPipe} from 'src/pipes/lengthPipe';
import {ForNextDirective} from '../../directives/forNext';

import {BigDataService} from "../../services/bigDataService";
import {SmallDataService} from "../../services/smallDataService";


// Annotation section
@Component({
    selector: 'app',
})
@View({
    templateUrl: 'src/components/app/app.html',
    pipes: [LengthPipe],
    directives: [NgFor, TodoItemComponent, RatingComponent, ForNextDirective]
})
// Component controller
export class AppComponent {
    name:string;
    names:string[];
    ratingEntry:RatingEntry;
    todoItems:TodoItem[];
    someData:number[];

    constructor(smallDataService:SmallDataService) {
        this.ratingEntry = new RatingEntry();
        this.ratingEntry.ratingNumber = 2;
        this.someData = smallDataService.getSmallData();


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

    ratingHappened() {
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


bootstrap(AppComponent, [BigDataService, SmallDataService]);

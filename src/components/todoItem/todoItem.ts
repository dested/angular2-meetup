///<reference path="../../typings/angular2/angular2.d.ts"/>
import {Component,View} from 'angular2/angular2';
import {ForNextDirective} from '../../directives/forNext';


export class TodoItem {
    name:string;
    isDone:boolean;
}

@Component({
    selector: 'todo-item',
    properties:['item']
})
@View({
    templateUrl: 'src/components/todoItem/todoItem.html',
    directives:[ForNextDirective]
})
export class TodoItemComponent {
    item:TodoItem;
    doneEditing($event:any) {
        console.log('done editing triggered: ', $event);
        var which = $event.which;
        var target = $event.target;
        if (which === 13) {
            this.item.name = target.value;
        }
    }
}

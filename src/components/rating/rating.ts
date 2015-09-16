///<reference path="../../typings/angular2/angular2.d.ts"/>
import {Component,View,NgIf,NgFor,EventEmitter} from 'angular2/angular2';


export class RatingEntry {
    ratingNumber:number;

}

@Component({
    selector: 'rating',
    properties: ['entry'],
    //events: ['onrate']
})
@View({
    templateUrl: 'src/components/rating/rating.html',
    directives: [NgFor, NgIf]
})
export class RatingComponent {
    entry:RatingEntry;
    //onRate=new EventEmitter();
    constructor() {
    }

    rateItem(count:number) {
        this.entry.ratingNumber = count;
        //this.onrate.next(count);
    }
}

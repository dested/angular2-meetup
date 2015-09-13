///<reference path="../typings/angular2/angular2.d.ts"/>
import {Directive,ElementRef} from 'angular2/angular2';

@Directive({
    selector: '[for-next]',
})
export class ForNextDirective {
   /* constructor(el:ElementRef) {
        var id="id"+(Math.random()*10000000|0);
        el.nativeElement.setAttribute('for',id);
        el.nativeElement.nextElementSibling.setAttribute('id',id);
    }*/
}

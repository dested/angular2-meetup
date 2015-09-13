///<reference path="../typings/angular2/angular2.d.ts"/>
import {Pipe } from 'angular2/angular2';
@Pipe({name: 'length'})
export class LengthPipe {
    transform(v:string):number {
        return v.length;
    }
}

///<reference path="../typings/angular2/angular2.d.ts"/>
import {BigDataService} from "./bigDataService";
import {Inject} from 'angular2/angular2';


export class SmallDataService {
    myBigDataService:BigDataService;

    constructor(@Inject(BigDataService) bigDataService:BigDataService) {
        this.myBigDataService = bigDataService;
    }

    getSmallData():number[] {
        return this.myBigDataService.getBigData().splice(0, 2);
    }
}

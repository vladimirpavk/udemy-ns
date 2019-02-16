import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'ns-challenge-edit',
    templateUrl: './challenge-edit.component.html',
    moduleId: module.id,
    styleUrls: [
        './challenge-edit.component.css'
    ]
})
export class ChallengeEditComponent{   
    @Output() public challengeEmmited:EventEmitter<string> = new EventEmitter<string>();

    private challengeDescription:string = '';    

    constructor(){

    }

    private setChallenge(){
        this.challengeEmmited.emit(this.challengeDescription);
    }
   
}
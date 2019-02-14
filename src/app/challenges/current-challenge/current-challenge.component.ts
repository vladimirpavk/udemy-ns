import { Component } from "@angular/core";

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    moduleId: module.id,
    styleUrls: [
        './current-challenge.component.css'
    ]
})
export class CurrentChallengeComponent{
    private challengeDescription: string = '';
    private newChallengeDescription: string = '';

    constructor(){

    }

    private setChallenge(){
        console.log(this.challengeDescription);
        this.newChallengeDescription = this.challengeDescription;
        console.log(this.newChallengeDescription);
    }
}
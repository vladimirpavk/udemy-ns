import { Component, Input } from "@angular/core";

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    moduleId: module.id,
    styleUrls: [
        './current-challenge.component.css'
    ]
})
export class CurrentChallengeComponent{    
    @Input() private newChallengeDescription: string = '';

    constructor(){

    }
}
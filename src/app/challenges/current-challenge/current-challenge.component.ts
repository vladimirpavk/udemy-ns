import { Component, Input } from "@angular/core";
import { ItemEventData } from 'tns-core-modules/ui/list-view';

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    moduleId: module.id,
    styleUrls: [
        './current-challenge.component.css'
    ]
})
export class CurrentChallengeComponent{    
    @Input() private challenges: string[] = [];

    constructor(){}

    private onChallengeTap(event:ItemEventData):void{
        console.log(event);
    }
}
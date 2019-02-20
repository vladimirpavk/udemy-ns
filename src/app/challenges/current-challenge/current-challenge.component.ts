import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    moduleId: module.id,
    styleUrls: [
        './current-challenge.component.css'
    ]
})
export class CurrentChallengeComponent{      

    constructor(private router:RouterExtensions){}
    
    private onEditChallenge(){
        console.log('onEditChallenge');
        this.router.navigate(['/challenge-edit']);
    }
}
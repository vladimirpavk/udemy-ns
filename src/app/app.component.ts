import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {
    private newChall:string = '';

    constructor(){}

    private newChallenge(nc:string):void{
        this.newChall = nc;
    }
 }

import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from "@angular/core";
import { UiServiceService } from "~/app/shared/ui/uiService.service";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { Subscription } from "rxjs";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit, OnDestroy{
    
    private challenges:string[] = [];
    @ViewChild('drawer') private _drawer:RadSideDrawerComponent;
    private _sub1:Subscription;

    constructor(
        private uiService:UiServiceService
    ){}

    private newChallenge(nc:string):void{
        this.challenges.push(nc);    
    }

    ngAfterViewInit(){
        this._sub1 = this.uiService.drawerOpened.asObservable().subscribe(
            (isDrawerOpened:boolean)=>{
                console.log(isDrawerOpened);
                this._drawer.sideDrawer.toggleDrawerState();            
            }
        )
    }

    ngOnDestroy(){
        this._sub1.unsubscribe();
    }

    private logout(){
        console.log('logout tapped');
        this.uiService.toogleDrawer();
    }
 }

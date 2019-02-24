import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { PageRoute } from "nativescript-angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'ns-challenge-edit',
    templateUrl: './challenge-edit.component.html',
    moduleId: module.id,
    styleUrls: [
        './challenge-edit.component.css'
    ]
})
export class ChallengeEditComponent implements OnInit, OnDestroy{ 
    
    private _subscriptions:Subscription[] = [];
    private _actionBarTitle:string = '';

    constructor(
        private activatedRoute:ActivatedRoute,
        private pageRoute:PageRoute
    ){}

    ngOnInit(){      
        this._subscriptions.push(
            this.pageRoute.activatedRoute.subscribe(            
                (activatedRoute)=>{
                    this._subscriptions.push(
                        activatedRoute.paramMap.subscribe(
                            (params:ParamMap)=>{
                                this._actionBarTitle=params.get('mode').charAt(0).toUpperCase()
                                +params.get('mode').substring(1)+ ' Challenge';
                            }
                        )
                    )
                }
            )        
        );
    }

    ngOnDestroy(){
        this._subscriptions.forEach(
            (subscription:Subscription)=>{
                subscription.unsubscribe();
            }
        )
    }
    
}
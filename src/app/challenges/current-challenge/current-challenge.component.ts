import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { DayModalComponent } from "~/app/challenges/day-modal/day-modal.component";
@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    moduleId: module.id,
    styleUrls: [
        './current-challenge.component.css'
    ]
})
export class CurrentChallengeComponent{      

    constructor(
        private modal:ModalDialogService,
        private vcRef:ViewContainerRef
    ){}

    private onChangeStatusTapped():void{
        this.modal.showModal(DayModalComponent,
        {
            fullscreen:true,
            viewContainerRef: this.vcRef,
            context: {
                date: new Date()
            } 
        }).then(
            (res:string)=>{
                console.log(res);
            }
        )
    }
}
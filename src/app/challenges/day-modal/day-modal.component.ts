import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

@Component({
  selector: 'ns-day-modal',
  templateUrl: './day-modal.component.html',
  styleUrls: ['./day-modal.component.css'],
  moduleId: module.id
})
export class DayModalComponent implements OnInit {

  private _dateToday:Date;

  constructor(
    private modalParams: ModalDialogParams
  ) { }

  ngOnInit() {
    this._dateToday = (<{date:Date}>(this.modalParams.context)).date;
  }

  private onHandleInput(status: string){
    this.modalParams.closeCallback(status);
  }

}

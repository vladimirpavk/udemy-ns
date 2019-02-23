import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

constructor() { }
  
  private _isDrawerOpened:boolean = false;
  public drawerOpened:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public toogleDrawer():void{
    if(this._isDrawerOpened){
      this._isDrawerOpened = false;      
    }
    else{
      this._isDrawerOpened=true;
    }
    console.log('uiService - '+this._isDrawerOpened);
    this.drawerOpened.next(this._isDrawerOpened);
  }

}

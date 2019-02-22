import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id
})
export class AuthComponent {

  constructor(
    private router:RouterExtensions
  ) { }

/*   private onSignIn():void{
    this.router.navigate(['/today']);
  }
 */

 private onButtonTap(){
   console.log('auth.component - Button tapped');
 }
}

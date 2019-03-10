import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id
})
export class AuthComponent implements OnInit {

  private form:FormGroup;

  constructor(private router: RouterExtensions) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn:'blur',
        validators: [Validators.email]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.min(6)] 
      })
    });
  }

  /*onSignin() {
    this.router.navigate(['/today'], { clearHistory: true });
  }*/

  private onSubmit(){
    console.log(this.form.valid);
    console.log();
  }
}

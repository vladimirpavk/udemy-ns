import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "~/app/app-routing.module";

import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from "~/app/challenges/current-challenge/current-challenge.component";
import { ChallengeEditComponent } from "~/app/challenges/challenge-edit/challenge-edit.component";
import { AuthComponent } from './auth/auth.component';
import { TodayComponent } from './today/today.component';

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      NativeScriptFormsModule,
      AppRoutingModule
   ],
   declarations: [
      AppComponent,
      CurrentChallengeComponent,
      ChallengeEditComponent,
      AuthComponent,
      TodayComponent
   ],
   providers: [],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

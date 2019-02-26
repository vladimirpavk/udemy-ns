import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

import { AppRoutingModule } from "~/app/app-routing.module";

import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from "~/app/challenges/current-challenge/current-challenge.component";
import { ChallengeEditComponent } from "~/app/challenges/challenge-edit/challenge-edit.component";
import { AuthComponent } from './auth/auth.component';
import { TodayComponent } from './challenges/today/today.component';
import { ActionBarComponent } from "~/app/shared/ui/action-bar/action-bar.component";
import { ChallengeTabsComponent } from "~/app/challenges/challenge-tabs/challenge-tabs.component";
import { DayModalComponent } from "~/app/challenges/day-modal/day-modal.component";
import { ChallengesModule } from "~/app/challenges/challenges.module";

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      NativeScriptFormsModule,
      AppRoutingModule,
      NativeScriptUISideDrawerModule,
      ChallengesModule
   ],
   declarations: [
      AppComponent,    
      AuthComponent,      
      ActionBarComponent
   ],
   providers: [],
   schemas: [
      NO_ERRORS_SCHEMA
   ],
   entryComponents:[
       DayModalComponent
   ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

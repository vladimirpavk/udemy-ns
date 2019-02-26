import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ChallengeTabsComponent } from "~/app/challenges/challenge-tabs/challenge-tabs.component";
import { TodayComponent } from "~/app/challenges/today/today.component";
import { CurrentChallengeComponent } from "~/app/challenges/current-challenge/current-challenge.component";
import { ChallengeEditComponent } from "~/app/challenges/challenge-edit/challenge-edit.component";
import { DayModalComponent } from "~/app/challenges/day-modal/day-modal.component";
import { ChallengesRoutingModule } from "~/app/challenges/challenges-routing.module";

@NgModule({
    imports:[      
        NativeScriptModule,
        NativeScriptFormsModule,
        ChallengesRoutingModule
    ],
    declarations:[
        ChallengeTabsComponent,
        TodayComponent,
        CurrentChallengeComponent,
        ChallengeEditComponent,
        DayModalComponent
    ]
})
export class ChallengesModule {

}
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthComponent } from './auth/auth.component';
import { TodayComponent } from '~/app/today/today.component';
import { CurrentChallengeComponent } from '~/app/challenges/current-challenge/current-challenge.component';
import { ChallengeEditComponent } from '~/app/challenges/challenge-edit/challenge-edit.component';

const routes:Routes = [
    { path: '', component: AuthComponent },
    { path: 'today', component: TodayComponent },
    { path: 'current-challenge', component: CurrentChallengeComponent },
    { path: 'challenge-edit', component:ChallengeEditComponent }
];

@NgModule({
    imports:[
        NativeScriptRouterModule.forRoot(routes)
    ],
    exports:[
        NativeScriptRouterModule
    ]
})
export class AppRoutingModule{}
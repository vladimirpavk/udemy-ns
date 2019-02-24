import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-challenge-tabs',
  templateUrl: './challenge-tabs.component.html',
  styleUrls: ['./challenge-tabs.component.css'],
  moduleId: module.id
})
export class ChallengeTabsComponent implements OnInit {

  constructor(
    private router:RouterExtensions,
    private activeRoute: ActivatedRoute,
    private page:Page
  ) { }

  ngOnInit() {

    this.router.navigate(
      [
        {
          outlets: {
            currentChallenge: ['current-challenge'],
            today: ['today']
          }
        }
      ],
      {
        relativeTo: this.activeRoute
      }
    );    
    this.page.actionBarHidden = true;
    
  }

}

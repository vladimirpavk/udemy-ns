import { Component, OnInit, Input } from '@angular/core';
import { isAndroid } from 'platform';
import { Page } from 'tns-core-modules/ui/page';
import { UiServiceService } from '~/app/shared/ui/uiService.service';

declare var android: any;

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
  moduleId: module.id
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;

  constructor(
    private page: Page,
    private uiService: UiServiceService
  ) {}

  ngOnInit() {}

  onLoadedActionBar() {
    if (isAndroid) {
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavigationIcon();
      if (backButton) {
        backButton.setColorFilter(
          android.graphics.Color.parseColor('#171717'),
          (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
        );
      }
    }
  }

  private navButtonTapped():void{
    console.log('navButtonTapped');
    this.uiService.toogleDrawer();
  }

}
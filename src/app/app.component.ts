/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ChangeDetectorRef } from '@angular/core';

import { GlobalVariablesService } from './services/global-variables.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public GVS: GlobalVariablesService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    console.log('[AppComponent#constructor]');
    console.log('[AppComponent#constructor] (GVS) all_pages', this.GVS.getVar('all_pages'));
  }

  detectChanges(from: string) {
    console.log('[AppComponent#detectChanges] from', from);
    this.cdr.detectChanges;
  }

  redirectTo(url: any) {
    console.log('[AppComponent#redirectTo] url', url);
    this.router.navigateByUrl(`/${url}`);

    this.GVS.setVar('current_url', url);
    console.log('[AppComponent#redirectTo] current_url', this.GVS.getVar('current_url'));

    this.detectChanges('app');
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';

import { GlobalVariablesService } from './services/global-variables.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD';

  constructor(
    public GVS: GlobalVariablesService,
    private router: Router
  ) {
    console.log('[AppComponent#constructor]');

    console.log('[AppComponent#constructor] (GVS) test', this.GVS.getVar('test'));
  }

  redirectTo(url: any) {
    console.log('[AppComponent#redirectTo] url', url);
    this.router.navigateByUrl(`/${url}`);
    // this.router.navigateByUrl('/' + url);
  }
}

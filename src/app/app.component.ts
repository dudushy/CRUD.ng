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
  url = '';

  constructor(
    public GVS: GlobalVariablesService,
    private router: Router
  ) {
    console.log('[AppComponent#constructor]');
    console.log('[AppComponent#constructor] (GVS) all_pages', this.GVS.getVar('all_pages'));

    this.updateURL();
  }

  updateURL() {
    const newUrl = this.router.url;
    console.log('[AppComponent#updateURL] newUrl', newUrl);

    if (newUrl == '/') {
      this.url = this.GVS.getVar('base_url');
    } else {
      this.url = newUrl;
    }

    console.log('[AppComponent#updateURL] url', this.url);
  }

  redirectTo(url: any) {
    console.log('[AppComponent#redirectTo] url', url);
    this.router.navigateByUrl(`/${url}`);
    this.updateURL();
  }
}

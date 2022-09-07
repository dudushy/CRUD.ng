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
  title = 'AppComponent';

  constructor(
    public GVS: GlobalVariablesService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    console.log(`[${this.title}#constructor]`);

    this.loadTheme();

    // console.log(`[${this.title}#constructor] (GVS) all_pages`, this.GVS.getVar('all_pages'));
  }

  toggleTheme() {
    // console.log(`[${this.title}#toggleTheme]`);

    const theme = this.GVS.getVar('theme');
    console.log(`[${this.title}#toggleTheme] theme`, theme);

    if (theme == 'light') {
      //? dark theme
      this.GVS.setVar('theme', 'dark');
      document.body.setAttribute('theme', this.GVS.getVar('theme'));
    } else {
      //? light theme
      this.GVS.setVar('theme', 'light');
      document.body.setAttribute('theme', this.GVS.getVar('theme'));
    }
  }

  loadTheme() {
    // console.log(`[${this.title}#loadTheme]`);

    const theme = this.GVS.getVar('theme');
    console.log(`[${this.title}#loadTheme] theme`, theme);

    document.body.setAttribute('theme', this.GVS.getVar('theme'));
  }

  updateView(from: string) {
    console.log(`[${this.title}#updateView] from`, from);

    this.cdr.detectChanges;
  }

  redirectTo(url: any) {
    console.log(`[${this.title}#redirectTo] url`, url);

    this.router.navigateByUrl(`/${url}`);

    this.GVS.setVar('current_url', url);
    console.log(`[${this.title}#redirectTo] current_url`, this.GVS.getVar('current_url'));

    this.updateView('app');
  }
}

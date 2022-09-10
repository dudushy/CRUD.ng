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
  username: any = null;

  constructor(
    public GVS: GlobalVariablesService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    console.log(`[${this.title}#constructor]`);

    const lastPage = this.GVS.getVar('last_page');
    console.log(console.log(`[${this.title}#constructor] lastPage`, lastPage));

    if (lastPage == null) {
      this.redirectTo(this.GVS.getVar('base_url'), this.title);
    } else {
      this.redirectTo(lastPage, this.title);
    }

    const user = this.GVS.getVar('user');
    console.log(console.log(`[${this.title}#constructor] user`, user));

    if (user != null) {
      this.login(atob(user.username), atob(user.password));
    }

    this.updateUsername();
    this.loadTheme();

    // console.log(`[${this.title}#constructor] (GVS) all_pages`, this.GVS.getVar('all_pages'));
  }

  login(username: any, password: any) {
    const accounts = this.GVS.getVar('accounts');
    console.log(`[${this.title}#login] accounts`, accounts);

    console.log(`[${this.title}#login] username`, username);
    console.log(`[${this.title}#login] password`, password);

    let validAccount = false;

    for (const account of accounts) {
      console.log(`[${this.title}#login] account`, account);

      const accountUsername = atob(account.username);
      console.log(`[${this.title}#login] accountUsername`, accountUsername);
      const accountPassword = atob(account.password);
      console.log(`[${this.title}#login] accountPassword`, accountPassword);

      if (username == accountUsername && password == accountPassword) {
        validAccount = true;
        const match = {
          username: `${username} == ${accountUsername}`,
          password: `${password} == ${accountPassword}`,
          validAccount: validAccount
        };
        console.log(`[${this.title}#login] match`, match);

        const user = {
          username: btoa(username),
          password: btoa(password),
          operator: account.operator
        };
        console.log(`[${this.title}#login] user`, user);
        this.GVS.setVar('logged', true);
        this.GVS.setVar('user', user);
        break;
      }
    }
    if (validAccount == false) console.log(`[${this.title}#login] no match`, validAccount);
    this.updateView('app');
  }

  updateUsername() {
    const user = this.GVS.getVar('user');
    if (user != null) {
      this.username = atob(user.username);
    } else {
      this.username = null;
    }
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

    this.updateUsername();
    this.cdr.detectChanges;
  }

  redirectTo(url: any, from: any) {
    console.log(`[${this.title}#redirectTo] ${from} | url`, url);

    this.router.navigateByUrl(`/${url}`);

    this.GVS.setVar('current_url', url);
    this.GVS.setVar('last_page', url);
    console.log(`[${this.title}#redirectTo] current_url`, this.GVS.getVar('current_url'));

    this.updateView('app');
  }
}

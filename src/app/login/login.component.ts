/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { GlobalVariablesService } from '../services/global-variables.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'login';
  peek = 'hide';

  constructor(
    public GVS: GlobalVariablesService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);
    this.app.updateView(this.title);

    const user = this.GVS.getVar('user');
    console.log(`[${this.title}#ngOnInit] user`, user);
    if (user != null) {
      this.login(atob(user.username), atob(user.password));
    }
  }

  updateView() {
    console.log(`[${this.title}#updateView]`);

    this.cdr.detectChanges;
    this.app.updateView(this.title);
  }

  redirectTo(url: any) {
    this.app.redirectTo(url, this.title);

    this.updateView();
  }

  togglePeek() {
    console.log(`[${this.title}#togglePasswordPeek]`);

    if (this.peek == 'hide') {
      this.peek = 'show';
    } else {
      this.peek = 'hide';
    }
    this.updateView();
  }

  login(username: any, password: any) {
    const accounts = this.GVS.getVar('accounts');
    console.log(`[${this.title}#login] accounts`, accounts);

    console.log(`[${this.title}#login] username`, username);
    console.log(`[${this.title}#login] password`, password);

    let validAccount = false;

    for (const account of accounts.users) {
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
    this.updateView();
  }

  logout() {
    this.GVS.setVar('logged', false);
    console.log(`[${this.title}#logout] logged`, this.GVS.getVar('logged'));
    this.GVS.setVar('user', null);
    console.log(`[${this.title}#logout] user`, this.GVS.getVar('user'));
    this.updateView();
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { GlobalVariablesService } from '../services/global-variables.service';

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
    public app: AppComponent
  ) {
    console.log('[LoginComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[LoginComponent#ngOnInit]');
    this.app.updateView(this.title);
  }

  updateView() {
    console.log(`[${this.title}#updateView]`);

    this.cdr.detectChanges;
  }

  togglePasswordPeek() {
    console.log(`[${this.title}#togglePasswordPeek]`);

    const passwordInput = document.getElementById('password-input') as HTMLInputElement;
    console.log(`[${this.title}#togglePasswordPeek] passwordInput`, passwordInput);

    if (this.peek == 'hide') {
      this.peek = 'show';
      passwordInput.type = 'text';
    } else {
      this.peek = 'hide';
      passwordInput.type = 'password';
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
        console.log(`[${this.title}#login] match`, {
          username: `${username} == ${accountUsername}`,
          password: `${password} == ${accountPassword}`,
          validAccount: validAccount
        });
        this.GVS.setVar('logged', true);
      }
    }
    if (validAccount != true) console.log(`[${this.title}#login] no match`, {
      username: `${username}`,
      password: `${password}`,
      validAccount: validAccount
    });
  }

  logout() {
    this.GVS.setVar('logged', false);
  }
}

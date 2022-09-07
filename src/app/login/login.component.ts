import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'login';
  peek = 'hide';

  constructor(
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

  login() {
    alert('aaa');
  }
}

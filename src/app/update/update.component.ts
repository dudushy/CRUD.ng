/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { GlobalVariablesService } from '../services/global-variables.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title = 'update';

  constructor(
    public GVS: GlobalVariablesService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    public app: AppComponent
  ) {
    console.log('[UpdateComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[UpdateComponent#ngOnInit]');
    this.app.updateView(this.title);
  }

  updateView() {
    console.log(`[${this.title}#updateView]`);

    this.cdr.detectChanges;
    this.app.updateView(this.title);
  }

  redirectTo(url: any) {
    console.log(`[${this.title}#redirectTo] url`, url);

    this.router.navigateByUrl(`/${url}`);

    this.GVS.setVar('current_url', url);
    console.log(`[${this.title}#redirectTo] current_url`, this.GVS.getVar('current_url'));

    this.updateView();
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { GlobalVariablesService } from '../services/global-variables.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  title = 'delete';

  constructor(
    public GVS: GlobalVariablesService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    public app: AppComponent
  ) {
    console.log('[DeleteComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[DeleteComponent#ngOnInit]');
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
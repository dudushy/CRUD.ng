import { Component } from '@angular/core';

import { GlobalVariablesService } from './services/global-variables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD';

  constructor(
    private GVS: GlobalVariablesService
  ) {
    console.log('[AppComponent#constructor]');
  }
}

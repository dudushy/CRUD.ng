import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { GlobalVariablesService } from '../services/global-variables.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  title = 'read';

  constructor(
    public GVS: GlobalVariablesService,
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log('[ReadComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[ReadComponent#ngOnInit]');
    this.app.updateView(this.title);
  }

  updateView() {
    console.log(`[${this.title}#updateView]`);

    this.cdr.detectChanges;
  }
}

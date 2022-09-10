import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { GlobalVariablesService } from '../services/global-variables.service';

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
  }
}

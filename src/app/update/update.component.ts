import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title = 'update';

  constructor(
    private cdr: ChangeDetectorRef,
    private app: AppComponent
  ) {
    console.log('[UpdateComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[UpdateComponent#ngOnInit]');
    this.app.detectChanges(this.title);
  }
}

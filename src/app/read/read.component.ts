import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  title = 'read';

  constructor(
    private cdr: ChangeDetectorRef,
    private app: AppComponent
  ) {
    console.log('[ReadComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[ReadComponent#ngOnInit]');
    this.app.detectChanges(this.title);
  }
}

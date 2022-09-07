import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'test';

  constructor(
    private cdr: ChangeDetectorRef,
    private app: AppComponent
  ) {
    console.log('[TestComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[TestComponent#ngOnInit]');
    this.app.updateView(this.title);
  }
}

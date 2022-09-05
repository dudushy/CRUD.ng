import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  title = 'create';

  constructor(
    private cdr: ChangeDetectorRef,
    private app: AppComponent
  ) {
    console.log('[CreateComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[CreateComponent#ngOnInit]');
    this.app.detectChanges(this.title);
  }
}

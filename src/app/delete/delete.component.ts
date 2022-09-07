import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  title = 'delete';

  constructor(
    private cdr: ChangeDetectorRef,
    private app: AppComponent
  ) {
    console.log('[DeleteComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[DeleteComponent#ngOnInit]');
    this.app.updateView(this.title);
  }
}

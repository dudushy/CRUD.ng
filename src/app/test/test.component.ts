import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { GlobalVariablesService } from '../services/global-variables.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'test';

  constructor(
    public GVS: GlobalVariablesService,
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log('[TestComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[TestComponent#ngOnInit]');
    this.app.updateView(this.title);
  }

  updateView() {
    console.log(`[${this.title}#updateView]`);

    this.cdr.detectChanges;
  }

  updateTextArea() {
    console.log('[TestComponent#updateTextArea]');
    const textarea = document.getElementById('test') as HTMLTextAreaElement;
    // console.log('[TestComponent#updateTextArea] textarea', textarea);
    // console.log('[TestComponent#updateTextArea] textarea.value', textarea.value);

    this.app.GVS.setVar('textarea_text', textarea.value);
    console.log('[TestComponent#updateTextArea] textarea_text', this.app.GVS.getVar('textarea_text'));
  }
}

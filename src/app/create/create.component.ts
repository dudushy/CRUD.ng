/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { GlobalVariablesService } from '../services/global-variables.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  title = 'create';
  img: any = null;

  constructor(
    public GVS: GlobalVariablesService,
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);
    this.app.updateView(this.title);
  }

  updateView() {
    console.log(`[${this.title}#updateView]`);

    this.cdr.detectChanges;
    this.app.updateView(this.title);
  }

  redirectTo(url: any) {
    this.app.redirectTo(url, this.title);

    this.updateView();
  }

  async uploadImg(file: any) {
    console.log(`[${this.title}#uploadImg] file`, file);

    this.img = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
    console.log(`[${this.title}#uploadImg] img`, this.img);

    this.updateView();
  }

  removeAllFiles(inputElement: any) {
    console.log(`[${this.title}#removeAllFiles]`);
    inputElement.value = '';
    this.img = null;

    this.updateView();
  }
}

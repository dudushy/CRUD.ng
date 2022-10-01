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
  title = 'CreateComponent';
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

    // this.test();
  }

  test() {
    this.GVS.setVar('dataArray', []);

    const dataArray = this.GVS.getVar('dataArray');
    console.log(`[${this.title}#test] (BEFORE) dataArray`, dataArray);

    dataArray.push({ aaa: 'bbb' });
    console.log(`[${this.title}#test] dataArray`, dataArray);

    this.GVS.setVar('dataArray', dataArray);
    console.log(`[${this.title}#test] (AFTER) dataArray`, this.GVS.getVar('dataArray'));
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

  createItem(nome: any, cpf: any, email: any, profissao: any, interesse: any) {
    const newId = this.GVS.getVar('dataArray').length + 1;

    const newItem = {
      id: newId,
      nome: nome,
      cpf: cpf,
      email: email,
      profissao: profissao,
      interesse: interesse
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [key, value] of Object.entries(newItem)) {
      // console.log(key, value);
      if (value == ('')) {
        alert('Please fill in all fields');
        return;
      }
    }
    console.log(`[${this.title}#createItem] newItem`, newItem);

    const dataArray = this.GVS.getVar('dataArray');
    console.log(`[${this.title}#createItem] (BEFORE) dataArray`, dataArray);

    dataArray.push(newItem);

    this.GVS.setVar('dataArray', dataArray);
    console.log(`[${this.title}#createItem] (AFTER) dataArray`, this.GVS.getVar('dataArray'));

    alert('Item saved!');
  }

  maskCpf(element: any) { //TODO - maskCpf (000.000.000-00)
    console.log(`[${this.title}#maskCpf] element`, element);
    console.log(`[${this.title}#maskCpf] element.target.value`, element.target.value);

    if (element.target.value.length > 11) {
      element.target.value = element.target.value.slice(0, 11);
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() {
    console.log('[CreateComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[CreateComponent#ngOnInit]');
  }
}

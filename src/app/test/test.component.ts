import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() {
    console.log('[TestComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[TestComponent#ngOnInit]');
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor() {
    console.log('[ReadComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[ReadComponent#ngOnInit]');
  }
}

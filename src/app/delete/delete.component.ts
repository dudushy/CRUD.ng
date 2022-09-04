import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor() {
    console.log('[DeleteComponent#constructor]');
  }

  ngOnInit(): void {
    console.log('[DeleteComponent#ngOnInit]');
  }
}

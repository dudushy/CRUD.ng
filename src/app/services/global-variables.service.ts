import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  constructor( ) {
    console.log('[GlobalVariablesService#constructor]');
  }
}

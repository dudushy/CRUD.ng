/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  variables: any;

  constructor( ) {
    console.log('[GlobalVariablesService#constructor]');

    this.variables = [];

    this.setVar('test', [
      'test',
      'create',
      'read',
      'update',
      'delete'
    ]);

    console.log('[GlobalVariablesService#constructor] variables', this.variables);
  }

  getVar(varname: any) {
    // console.log(`[GlobalVariablesService#getVar] variables[${varname}]`, this.variables[varname]);

    if (this.variables[varname] != undefined) {
      return this.variables[varname];
    } else {
      return null;
    }
  }

  setVar(varname: any, value: any) {
    this.variables[varname] = value;

    // console.log(`[GlobalVariablesService#setVar] variables[${varname}]`, this.variables[varname]);
  }
}

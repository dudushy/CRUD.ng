/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  variables: any = [];

  constructor() {
    console.log('[GlobalVariablesService#constructor]');

    this.setupVars();

    this.variables.theme = 'dark';

    this.variables.all_pages = [
      'test',
      'create',
      'read',
      'update',
      'delete'
    ];

    this.variables.base_url = 'test';

    this.variables.current_url = 'test';

    console.log('[GlobalVariablesService#constructor] variables', this.variables);
  }

  setupVars() {
    console.log('[GlobalVariablesService#setupVars]');
    this.setVar('theme', 'dark');

    this.setVar('all_pages', [
      'test',
      'create',
      'read',
      'update',
      'delete'
    ]);

    this.setVar('base_url', 'test');

    this.setVar('current_url', 'test');
  }

  getVar(varname: any) {
    // if (this.variables[varname] != undefined) {
    //   return this.variables[varname];
    // } else {
    //   return null;
    // }

    return JSON.parse(localStorage.getItem(varname) || 'null');
  }

  setVar(varname: any, value: any) {
    // this.variables[varname] = value;

    localStorage.setItem(varname, JSON.stringify(value));
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

import { SECRETS } from '../../assets/secrets/secrets';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { getFirestore, doc, collection, addDoc, getDocs, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  variables: any = [];

  fbApp = initializeApp(SECRETS.firebaseConfig);
  fbAnalytics = getAnalytics(this.fbApp);
  db = getFirestore(this.fbApp);

  constructor() {
    console.log('[GlobalVariablesService#constructor]');

    this.setupVars();

    // this.test();
  }

  async test() {
    this.addFbDoc('test', 'dudu', 20);
    console.log('[GlobalVariablesService#constructor] getFbDocs (1)');
    await this.getFbDocs('test');
    console.log('[GlobalVariablesService#constructor] getFbDocs (2)');
    await this.getFbDocs('test');
  }

  setupVars() {
    console.log('[GlobalVariablesService#setupVars]');

    this.variables.theme = 'dark';
    this.variables.all_pages = [
      'test',
      'login',
      'create',
      'read',
      'update',
      'delete'
    ];
    this.variables.base_url = 'test';
    this.variables.current_url = 'test';
    console.log('[GlobalVariablesService#setupVars] variables', this.variables);

    this.setVar('theme', 'dark');
    this.setVar('all_pages', [
      'test',
      'login',
      'create',
      'read',
      'update',
      'delete'
    ]);
    this.setVar('base_url', 'login');
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

  async setFbDoc(table: any, id: any, varname: any, value: any) {
    const params = {
      table: table,
      id: id,
      varname: varname,
      value: value
    };
    console.log('[GlobalVariablesService#setFbDoc] params', params);

    await setDoc(
      doc(this.db, table, id),
      {
        [varname]: value
      },
      {
        merge: true
      }
    );
  }

  async addFbDoc(table: any, varname: any, value: any) {
    try {
      const docRef = await addDoc(collection(this.db, table), {
        [varname]: value
      });
      // console.log('[GlobalVariablesService#addFbDoc] docRef', docRef);
      console.log(`[GlobalVariablesService#addFbDoc] ${table}/${varname} success | id`, docRef.id);
    } catch (e) {
      console.error(`[GlobalVariablesService#addFbDoc] ${table}/${varname} error`, e);
    }
  }

  async getFbDocs(table: any) {
    const querySnapshot = await getDocs(collection(this.db, table));
    // console.log('[GlobalVariablesService#getFbDocs] querySnapshot', querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(`[GlobalVariablesService#getFbDocs] ${doc.id}`, doc.data());
      this.setFbDoc(table, doc.id, 'dudushy', 'natan');
    });
  }
}

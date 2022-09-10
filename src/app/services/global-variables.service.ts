/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

//! FIREBASE (OUT OF ORDER) [BEGIN] #1
// import { SECRETS } from '../../assets/secrets/secrets';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getFirestore, doc, collection, addDoc, getDocs, setDoc } from 'firebase/firestore';
//! FIREBASE (OUT OF ORDER) [END] #1

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  title = 'GlobalVariablesService';

  //! FIREBASE (OUT OF ORDER) [BEGIN] #2
  // fbApp = initializeApp(SECRETS.firebaseConfig);
  // fbAnalytics = getAnalytics(this.fbApp);
  // db = getFirestore(this.fbApp);
  //! FIREBASE (OUT OF ORDER) [END] #2

  constructor() {
    console.log(`[${this.title}#constructor]`);

    this.setupVars();

    // this.test();
  }

  async test() {
    //! FIREBASE (OUT OF ORDER) [BEGIN] #3
    // this.addFbDoc('test', 'dudu', 20);
    // console.log(`[${this.title}#constructor] getFbDocs (1)`);
    // await this.getFbDocs('test');
    // console.log(`[${this.title}#constructor] getFbDocs (2)`);
    // await this.getFbDocs('test');
    //! FIREBASE (OUT OF ORDER) [END] #3
  }

  setupVars() {
    console.log(`[${this.title}#setupVars]`);

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
    this.setVar('logged', false);

    this.setVar('accounts', [
      {
        username: btoa('admin'),
        password: btoa('123'),
        operator: true
      },
      {
        username: btoa('guest'),
        password: btoa(''),
        operator: false
      }
    ]);
    console.log(`[${this.title}#setupVars] (STORAGE) accounts`, this.getVar('accounts'));

    this.setVar('products', [
      {
        id: 0,
        name: 'banana',
        amount: 5,
        price: 1.99,
        // icon: 'test.svg'
      },
      {
        id: 1,
        name: 'apple',
        amount: 2,
        price: 2.50,
        // icon: 'test.svg'
      }
    ]);
    console.log(`[${this.title}#setupVars] (STORAGE) products`, this.getVar('products'));

  }

  getVar(varname: any) {
    return JSON.parse(localStorage.getItem(varname) || 'null');
  }

  setVar(varname: any, value: any) {
    localStorage.setItem(varname, JSON.stringify(value));
  }

  //! FIREBASE (OUT OF ORDER) [BEGIN] #4
  // async setFbDoc(table: any, id: any, varname: any, value: any) {
  //   const params = {
  //     table: table,
  //     id: id,
  //     varname: varname,
  //     value: value
  //   };
  //   console.log(`[${this.title}#setFbDoc] params`, params);

  //   await setDoc(
  //     doc(this.db, table, id),
  //     {
  //       [varname]: value
  //     },
  //     {
  //       merge: true
  //     }
  //   );
  // }

  // async addFbDoc(table: any, varname: any, value: any) {
  //   try {
  //     const docRef = await addDoc(collection(this.db, table), {
  //       [varname]: value
  //     });
  //     // console.log(`[${this.title}#addFbDoc] docRef`, docRef);
  //     console.log(`[${this.title}#addFbDoc] ${table}/${varname} success | id`, docRef.id);
  //   } catch (e) {
  //     console.error(`[${this.title}#addFbDoc] ${table}/${varname} error`, e);
  //   }
  // }

  // async getFbDocs(table: any) {
  //   const querySnapshot = await getDocs(collection(this.db, table));
  //   // console.log(`[${this.title}#getFbDocs] querySnapshot`, querySnapshot);
  //   querySnapshot.forEach((doc) => {
  //     console.log(`[${this.title}#getFbDocs] ${doc.id}`, doc.data());
  //     this.setFbDoc(table, doc.id, 'dudushy', 'natan');
  //   });
  // }
  //! FIREBASE (OUT OF ORDER) [END] #4
}

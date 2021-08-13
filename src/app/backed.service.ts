import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackedService {

  constructor() { }

  // tslint:disable-next-line:typedef
  getProduct(){
    return [
      {
        name: 'ส้มโอ',
        price: 111
      },
      {
        name: 'แตงโม',
        price: 222
      },
      {
        name: 'มะพร้าวนํ้าหอม',
        price: 333
      }
    ];
  }
}

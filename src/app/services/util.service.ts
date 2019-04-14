import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  arrayToNumber(num): number[]{
    return Array(num);
  }
}

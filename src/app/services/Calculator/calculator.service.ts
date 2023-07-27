import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  add(a:number, b: number){
    let result = a+b;
    return result;
  }
  substract(a:number, b:number){
    let result = a-b;
    return result;
  }
}

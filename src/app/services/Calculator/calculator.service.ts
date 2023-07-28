import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerSerice:LoggerService) {

  }

  add(a:number, b: number){
    let result = a+b;
    this.loggerSerice.log("add operation is called");
    return result;
  }
  substract(a:number, b:number){
    let result = a-b;
    this.loggerSerice.log("substract operation is called");
    return result;
  }
}

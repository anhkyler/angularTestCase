import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from '../Logger/logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two number', ()=> {
    let loggerSerice = new LoggerService();
    const calculator = new CalculatorService(loggerSerice);
    let result = calculator.add(2,2);
    expect(result).toBe(4);
  });
  it('should - two number',()=> {    
    let loggerSerice = new LoggerService();
    const calculator = new CalculatorService(loggerSerice);
    let result = calculator.substract(2,2);
    expect(result).toBe(0);
  });
});

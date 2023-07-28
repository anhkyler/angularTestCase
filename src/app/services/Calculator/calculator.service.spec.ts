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
    spyOn(loggerSerice,'log');
    const calculator = new CalculatorService(loggerSerice);
    let result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(loggerSerice.log).toHaveBeenCalledTimes(1);
  });
  it('should - two number',()=> {    
    let loggerSerice = jasmine.createSpyObj('loggerService',['log']);
    // spyOn(loggerSerice,'log')
    //proxy project
    const calculator = new CalculatorService(loggerSerice);
    let result = calculator.substract(2,2);
    expect(result).toBe(0);
    expect(loggerSerice.log).toHaveBeenCalledTimes(1);
  });
});

import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

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

    const calculator = new CalculatorService();
    let result = calculator.add(2,2);
    expect(result).toBe(4);
  });
  it('should - two number',()=> {
    const calculator = new CalculatorService();
    let result = calculator.substract(2,2);
    expect(result).toBe(0);
  });
});

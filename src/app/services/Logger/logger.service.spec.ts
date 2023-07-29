import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(LoggerService);
  // });

  it('not message at beggining', () => {
    const service = new LoggerService();
    let count = service.message.length;
    expect(count).toBe(0);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});

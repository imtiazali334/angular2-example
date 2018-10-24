/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReqLeaveService } from './req-leave.service';

describe('ReqLeaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReqLeaveService]
    });
  });

  it('should ...', inject([ReqLeaveService], (service: ReqLeaveService) => {
    expect(service).toBeTruthy();
  }));
});

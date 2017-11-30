import { TestBed, inject } from '@angular/core/testing';

import {ContractService} from './contract.service';

describe('RoomTypeDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractService]
    });
  });

  it('should be created', inject([ContractService], (service: ContractService) => {
    expect(service).toBeTruthy();
  }));
});

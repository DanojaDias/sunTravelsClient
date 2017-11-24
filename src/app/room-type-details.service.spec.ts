import { TestBed, inject } from '@angular/core/testing';

import { RoomTypeDetailsService } from './room-type-details.service';

describe('RoomTypeDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomTypeDetailsService]
    });
  });

  it('should be created', inject([RoomTypeDetailsService], (service: RoomTypeDetailsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { HotelListService } from './hotel-list.service';

describe('HotelListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelListService = TestBed.get(HotelListService);
    expect(service).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShelflifeService } from './shelflife.service';

describe('Service: Shelflife', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShelflifeService]
    });
  });

  it('should ...', inject([ShelflifeService], (service: ShelflifeService) => {
    expect(service).toBeTruthy();
  }));
});

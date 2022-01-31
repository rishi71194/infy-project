/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicelevelService } from './servicelevel.service';

describe('Service: Servicelevel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicelevelService]
    });
  });

  it('should ...', inject([ServicelevelService], (service: ServicelevelService) => {
    expect(service).toBeTruthy();
  }));
});

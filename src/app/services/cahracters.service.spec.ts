import { TestBed, inject } from '@angular/core/testing';

import { CahractersService } from './cahracters.service';

describe('CahractersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CahractersService]
    });
  });

  it('should be created', inject([CahractersService], (service: CahractersService) => {
    expect(service).toBeTruthy();
  }));
});

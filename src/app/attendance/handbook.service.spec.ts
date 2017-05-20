import { TestBed, inject } from '@angular/core/testing';

import { HandbookService } from './handbook.service';

describe('HandbookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandbookService]
    });
  });

  it('should ...', inject([HandbookService], (service: HandbookService) => {
    expect(service).toBeTruthy();
  }));
});

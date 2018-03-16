import { TestBed, inject } from '@angular/core/testing';

import { FetchnewsService } from './fetchnews.service';

describe('FetchnewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchnewsService]
    });
  });

  it('should be created', inject([FetchnewsService], (service: FetchnewsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { IdParserService } from './id-parser.service';

describe('IdParserService', () => {
  let service: IdParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

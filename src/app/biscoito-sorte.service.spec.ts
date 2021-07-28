import { TestBed } from '@angular/core/testing';

import { BiscoitoSorteService } from './biscoito-sorte.service';

describe('BiscoitoSorteService', () => {
  let service: BiscoitoSorteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiscoitoSorteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

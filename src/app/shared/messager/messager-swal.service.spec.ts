import { TestBed } from '@angular/core/testing';

import { MessagerSwalService } from './messager-swal.service';

describe('MessagerSwalService', () => {
  let service: MessagerSwalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagerSwalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

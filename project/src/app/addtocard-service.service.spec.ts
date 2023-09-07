import { TestBed } from '@angular/core/testing';

import { AddtocardSERVICEService } from './addtocard-service.service';

describe('AddtocardSERVICEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtocardSERVICEService = TestBed.get(AddtocardSERVICEService);
    expect(service).toBeTruthy();
  });
});

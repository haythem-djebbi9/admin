import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guard } from './guard.guard'; // Assurez-vous d'importer le bon nom de classe depuis votre fichier guard

describe('AuthGuard', () => {
  let executeGuard: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    executeGuard = TestBed.inject(guard).canActivate; // Utilisez TestBed.inject pour obtenir une instance du garde
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

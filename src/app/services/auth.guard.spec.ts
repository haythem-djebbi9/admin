import { TestBed } from '@angular/core/testing';
import { CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginService } from './login.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService] // Ajoutez le service LoginService à la liste des fournisseurs
    });
    guard = TestBed.inject(AuthGuard); // Injectez le AuthGuard depuis le TestBed
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

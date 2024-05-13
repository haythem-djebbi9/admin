import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

export class guard implements CanActivate {


  constructor( private _auth:AuthService,private router:Router){}
  canActivate(){
 if(this._auth.isLoggedIn()){
   return true;
 }
 else{
 this.router.navigate(['/login']);
 return false;
 }
 
  }
}// canActivate(
  //   route: ActivatedRouteSnapshot,
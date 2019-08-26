import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  
  constructor(private authService: AuthService, private router: Router){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
      console.log('auth guard called ' + state.url + " " + state.root);      
    let url = state.url
    return this.checkLogIn(url);
  }
  // canActivate(
    
  // }
  checkLogIn(url: String): boolean{
    if (this.authService.isLoggedIn) {       
      return true; 
    }
    this.authService.redirectUrl = url;
    console.log('inside check login');
    
    this.router.navigate(['login']);
    return false;
  }
  
}

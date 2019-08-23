import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn = false;
  redirectUrl:String = "/dashboard";

  login(): Observable<boolean> {
    return of(localStorage.getItem('email') == 'ketulp@gmail.com' && localStorage.getItem('password') =='ketul123').pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }
  
  logout(): void {
    localStorage.clear();
    this.isLoggedIn = false;
  }
}

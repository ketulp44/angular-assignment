import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  });
  constructor(private router:Router,private authService: AuthService) { }

  ngOnInit() {
    this.authService.login().subscribe((data)=>{
        if(data){
          this.router.navigate([this.authService.redirectUrl]);
        }
    });    
  }
  get email(): FormControl {
    return <FormControl>this.loginForm.controls['email'];
  }
  get password():FormControl{
    return <FormControl>this.loginForm.controls['password'];
  }
  login(){
    if(this.loginForm.valid){
      localStorage.setItem('email',this.email.value);
      localStorage.setItem('password',this.password.value);
      this.authService.login();
      this.authService.isLoggedIn=true;
      this.router.navigate([this.authService.redirectUrl]);
    }
  }

}

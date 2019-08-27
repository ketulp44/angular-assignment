import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  form:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,this.passwordValidation.bind(this)]),
    mobileNo: new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")])
  });
  submitted = false;
  ngOnInit() {
  }
  get email(): FormControl{
    
    return <FormControl>this.form.controls.email;
  }
  get name():FormControl{    
    return <FormControl>this.form.controls.name;
  }
  get password():FormControl{
    console.log(this.form.controls.password);
    return <FormControl>this.form.controls.password;
  }
  get mobileNo():FormControl{
    // console.log(this.form.controls.mobileNo);
    
    return <FormControl>this.form.controls.mobileNo;
  }
  onSubmit() {
    if(this.form.valid){
      this.submitted=true;
      console.log('form submited');

    }
  }
  passwordValidation(control : AbstractControl): {[key: string]: any} | null {
    console.log('custom validation');    
    let passRe = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$");
    const valid = passRe.test(control.value);
    console.log('valid ' + valid);
    
    return !valid ? {'invalidPassword': {value: control.value}} : null;
  }
  
}

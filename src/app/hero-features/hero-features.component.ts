import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-features',
  templateUrl: './hero-features.component.html',
  styleUrls: ['./hero-features.component.css']
})
export class HeroFeaturesComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    username: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10) ]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
  } );

  constructor() { }
  ngOnInit(): void {}

  get name(){return this.registerForm.get("name")}
  get email(){return this.registerForm.get("email")}
  get username(){return this.registerForm.get("username")}
  get password(){return this.registerForm.get("password")}
  get confirmPassword(){return this.registerForm.get("confirmPassword")}

  // get registerFormControl() {
  //   return this.registerForm?.controls;
  // }
  onSubmit() {

  }

  isFieldValid(field: string) {
    return !this.registerForm.get(field)?.valid && this.registerForm.get(field)?.touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  

}

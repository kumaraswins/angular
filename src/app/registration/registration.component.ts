import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {forbiddenNameValidator,confirmPasswordValidator} from '../helpers/user.validation'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  registrationForm!: FormGroup;
  
  constructor(private _fb:FormBuilder) { }

  
  

  ngOnInit(): void {
    this.registrationForm = this._fb.group({
      userName : ['',[Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      email :['',Validators.email],
      password : [''],
      confirmPassword : [''],
      subscribe :false,
      address : this._fb.group({
        city : [''],
        state : [''],
        code:['']
  
      })
    },{validator : confirmPasswordValidator})

    this.registrationForm.get('subscribe')?.
        valueChanges.subscribe(checkedValue =>{
          const email = this.registrationForm?.get('email');
          if(checkedValue){
            email?.clearValidators()
            email?.setValidators([Validators.required,Validators.email])
          } else{
            email?.clearValidators()
          }
          email?.updateValueAndValidity()
    })

  }
  

  get userName(){
    return this.registrationForm?.get('userName')
  }

  get confirmPassword(){
    return this.registrationForm?.get('confirmPassword')
  }
  get email(){
    return this.registrationForm?.get('email');
  }
  loadData(){
    this.registrationForm?.patchValue({
      userName : 'Bruce',
      password : "test",
      confirmPassword : 'test',
      address :{
        state : 'Tamil nadu',
        city :"Chennai",
        code : "600073"
      }
    })
    
  }

}

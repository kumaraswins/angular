import { Component, OnInit } from '@angular/core';
import { Login } from '../interface/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  submitted = false;
  
  isShown : boolean = false;

  model = new Login('','');

  ngOnInit(): void {
  }

  onSubmit() { 
    console.log(this.model)
    this.model = {"name":"","password":""}
    this.isShown =true;
 }

}

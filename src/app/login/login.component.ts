import { Component, OnInit } from '@angular/core';
import { Login } from '../interface/login';
import { LoginService } from '../login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:LoginService, private router: Router) { }
  submitted = false;
  
  isShown : boolean = false;

  model = new Login('','');

  ngOnInit(): void {
  }

  onSubmit() { 
    console.log(this.model)
    this.api.login(this.model)
    .subscribe(data => {
      console.log(data);
      this.model = {"name":"","password":""}
      this.router.navigateByUrl('/home');

    })      
    this.isShown =true;
 }

}

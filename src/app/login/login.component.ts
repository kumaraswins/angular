import { Component, OnInit } from '@angular/core';
import { Login } from '../interface/login';
import { LoginService } from '../login.service'
import { Router } from '@angular/router'
import {HelpersService} from  "../helpers.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:LoginService, private router: Router, private hs:HelpersService) { }
  submitted = false;
  isShown : boolean = false;
  model = new Login('','');
  inValidUser = false;
  alert = "";

  ngOnInit(): void {
    console.log(this.hs.getMMDDYYYY())
  }

  refresh(){
    console.log(">>", localStorage.getItem("token"))
    this.api.getList()
    .subscribe(data => {
      console.log(data);
    })
  }

  onSubmit() {
    this.api.login(this.model)
    .subscribe(data => {
      if(data['success']){
        localStorage.setItem("token",data['data']['token'])
        this.refresh();
        this.router.navigateByUrl('/list');

      } else {
        this.alert = data['message'];
        this.inValidUser = true;
        this.model = {"name":"","password":""}
      }
    })
    this.isShown =true;
 }

}

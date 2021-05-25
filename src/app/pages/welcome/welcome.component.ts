import { CowinService } from './../../cowin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {HelpersService} from  "../../helpers.service";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( private router: Router, private hs:HelpersService, private api:CowinService) { }

  ngOnInit() {
  }

  // onSubmit(){
  //   console.log(">>>>>>>>>>>>>")

  // }

  onSubmit() {
    this.api.getDistrictData()
    .subscribe(data => {
      console.log(data)
    })

 }

}

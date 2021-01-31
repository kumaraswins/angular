import { Login } from './../interface/login';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { UserList } from '../interface/login_list';

@Component({
  selector: 'app-hero-pricing',
  templateUrl: './hero-pricing.component.html',
  styleUrls: ['./hero-pricing.component.css']
})
export class HeroPricingComponent implements OnInit {

  constructor(private api:LoginService) { }

  deviceData: UserList[] = [];
  selected = false;

  model : UserList | undefined;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getList()
    .subscribe(data => {
      console.log(data.data)
      this.deviceData = data['data'];
    })
  }
  /**
   *
   * @param user
   */
  onSelect(user:UserList){
    this.selected = true;
    this.model  = user;
    console.log(user);
  }

}

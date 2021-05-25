import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { UserList, NewUserList } from '../interface/login_list';

@Component({
  selector: 'app-hero-pricing',
  templateUrl: './hero-pricing.component.html',
  styleUrls: ['./hero-pricing.component.css']
})
export class HeroPricingComponent implements OnInit {

  checked = false;
  loading = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();

  constructor(private api:LoginService) { }

  deviceData: UserList[] = [];
  selected = false;
  newUser = false;
  showForm = false;

  model : any | undefined;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.deviceData =[];
    this.api.getList()
    .subscribe(data => {
      let response = data['data'];

      for(let i=0;i<response.length;i++){
        response[i]['disabled'] = false
      }

      console.log(response)
      this.deviceData = response;

    })
  }
  /**
   *
   * @param user
   */
  onSelect(user:UserList){
    this.selected = true;
    this.model = Object.assign({}, user);
    console.log(user);
  }
  /**
   *
   * @param id
   */
  onDelete(id:Number){

    this.api.delete(id)
    .subscribe(data => {
      console.log(data)
      this.getData();
    })

  }
  addNew(){
    let user : any = {
      'name' :"",
      "password":"",
      "uuid" :""
    }
    this.model =user;
  }
  createnew(){
    console.log(this.model);

    this.api.add(this.model)
    .subscribe(data => {
      console.log(data);
      this.model = undefined;
      this.getData();
    })

  }

  update(){
    console.log(this.model);
    this.api.update(this.model)
    .subscribe(data => {
      console.log(data);
      this.model = undefined;
      this.getData();
    })

  }

  onItemChecked(id: object): void {

  }


}

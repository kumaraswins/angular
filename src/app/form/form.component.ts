import { Component, OnInit } from '@angular/core';
import {FormHero as Hero} from '../interface/form-heroes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.model = new Hero(42, 'Ash', '');
    
  }

    powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer','1','2','3'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
     //this.submitted = true; 
     console.log(this.model)
     
  }
  onChange(){
    console.log(this.model.power)
  }
  // new hero

  newHero() {
    this.model = new Hero(42, 'Ash', '');
    
  }

}

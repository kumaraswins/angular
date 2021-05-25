import { Component, OnInit } from '@angular/core';
import {Hero} from '../interface/heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero | undefined;
  heroes: Hero[] | undefined;


  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
    console.log(environment.url);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.clear()
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }



  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}

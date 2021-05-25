import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mock.heroes';
import { Hero } from './interface/heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(  private http: HttpClient,
    private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
      this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
    }

    getData(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
    }


    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
}

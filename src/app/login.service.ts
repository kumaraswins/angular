import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './interface/login';
import {environment} from '../environments/environment'
import {HelpersService} from  "./helpers.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient, private helperService: HelpersService) { }


  getList(): Observable<any> {
    return this.http.get(environment.url + '/bot/list/', { headers: this.helperService.getAuthHeaders()})
  }

  login(login:Login):Observable<any> {
    const body=JSON.stringify(login);
    return this.http.post(environment.url + '/bot/login', body, {'headers':this.helperService.getHeaders()})
  }
}

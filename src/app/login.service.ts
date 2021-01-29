import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './interface/login';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  getList(): Observable<any> {
    console.log('getPeople '+environment.url + '/bot/list/')
    return this.http.get<Login[]>(+environment.url + '/bot/list/')
  }
  login(login:Login):Observable<any> {
    //'Access-Control-Allow-Origin': '*')
    const headers = { 'content-type': 'application/json','Access-Control-Allow-Origin': '*'}  
    const body=JSON.stringify(login);
    console.log(body)
    return this.http.post(environment.url + '/bot/login', body,{'headers':headers})
  }

  


}

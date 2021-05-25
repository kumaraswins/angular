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

  delete(id:Number): Observable<any> {
    const body={"id":id};
    return this.http.post(environment.url + '/bot/delete/',body, { headers: this.helperService.getAuthHeaders()})
  }

  getList(): Observable<any> {
    return this.http.get(environment.url + '/bot/list/', { headers: this.helperService.getHeaders()})
  }

  login(login:Login):Observable<any> {
    // const body= login//JSON.stringify(login);
    // console.log(body)
    return this.http.post(environment.url + '/bot/login/', login, {'headers':this.helperService.getHeaders()})
  }

  add(user:any):Observable<any> {
    const body=JSON.stringify(user);
    return this.http.post(environment.url + '/bot/add', user, {'headers':this.helperService.getHeaders()})
  }

  update(user:any):Observable<any> {
    const body=JSON.stringify(user);
    return this.http.post(environment.url + '/bot/update', user, {'headers':this.helperService.getHeaders()})
  }

}

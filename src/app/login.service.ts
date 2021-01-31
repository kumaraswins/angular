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
    const body=JSON.stringify({"id":id});
    return this.http.post(environment.url + '/bot/delete/',body, { headers: this.helperService.getAuthHeaders()})
  }

  getList(): Observable<any> {
    return this.http.get(environment.url + '/bot/list/', { headers: this.helperService.getAuthHeaders()})
  }

  login(login:Login):Observable<any> {
    const body=JSON.stringify(login);
    return this.http.post(environment.url + '/bot/login', body, {'headers':this.helperService.getHeaders()})
  }

  add(user:any):Observable<any> {
    const body=JSON.stringify(user);
    return this.http.post(environment.url + '/bot/add', body, {'headers':this.helperService.getAuthHeaders()})
  }

  update(user:any):Observable<any> {
    const body=JSON.stringify(user);
    return this.http.post(environment.url + '/bot/update', body, {'headers':this.helperService.getAuthHeaders()})
  }
}

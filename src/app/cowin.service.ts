import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'
import {HelpersService} from  "./helpers.service";

@Injectable({
  providedIn: 'root'
})
export class CowinService {

  constructor(private http: HttpClient, private helperService: HelpersService) { }

  getDistrictData():  Observable<any>{
    let url = '/appointment/sessions/public/calendarByDistrict?district_id=565&date=25/05/2021'
    return this.http.get(environment.cowin + url, { headers: this.helperService.getHeaders()})
  }
}

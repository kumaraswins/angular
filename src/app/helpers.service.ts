import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  getAuthHeaders(){
    let headers = {
      "content-type":"application/json",
      "Authorization":"Bearer "+ localStorage.getItem("token")
    }
    return headers;
  }
  getHeaders(){
    let headers = {
      "content-type":"application/json"
    }
    return headers;
  }
}

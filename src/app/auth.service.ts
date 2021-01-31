import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getToken(): string {
    return localStorage.getItem("token") || "";
  }

  constructor() { }

    public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    if(token)
      return true;
    return false;
  }
}

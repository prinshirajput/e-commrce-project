import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
    // this.token = localStorage.getItem('token');
   }
   
  private token:any;
  private header:any;
  setToken(token: any) {
    console.log("service---------------------->",token)
    const headers = new HttpHeaders({
    'Authorization': token // Assuming it's a Bearer token
  });
    var getnewtoken = localStorage.setItem('token',token);
    // console.log('getnewtoken',getnewtoken);
  }
  getToken() {
    if (this.token) {
      return new HttpHeaders({
        'Authorization': `${this.token}`
      });
    } else {
      return new HttpHeaders();
    }
  }
}
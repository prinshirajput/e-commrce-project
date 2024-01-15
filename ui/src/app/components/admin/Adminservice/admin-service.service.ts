import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private apiEndpoint = 'http://localhost:6001/user';

  constructor(private http: HttpClient) {}
    
  url="http://localhost:6001/img_data"
  save_product_details(data:any)
 {
  return this.http.post(`${this.url}/add-image-data`,data)


 }
 get_all_users()
 {
  return this.http.get(`${this.apiEndpoint}/get_all`)
}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private userdata:any;
  private apiEndpoint = 'http://localhost:6001/user';
  private cartItems: any[] = [];
  private Number_of_card_data:any;

  constructor(private http: HttpClient) {}

  saveUser(data: any): Observable<any> {
    return this.http.post(`${this.apiEndpoint}/save`, data);
  }
  LoginUser(data: any): Observable<any> {
    return this.http.post(`${this.apiEndpoint}/login`, data);
  }
  setUserDetails(email: any) {
    const tokent = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `${tokent}` // Assuming it's a Bearer token
       });
    // Corrected the syntax for building the URL
  return this.http.get(`${this.apiEndpoint}/feathbyemail/${email}`,{headers})
 }
 getUserDetails()
 {
  console.log("inner service")
  console.log(" inner service user data->",this.userdata)
  return this.userdata;
 }
 feachbyid(id:any)
 {
  return this.http.get(`${this.apiEndpoint}/fetch/${id}`)
}
 updatedata(udata:any)
 {
  console.log("udata",udata)
  return this.http.put(`${this.apiEndpoint}/edit`,udata)
 }
 addToCart(img:any) {
  return this.http.get(`http://localhost:6001/admin/getimage`)
}
getcardimg() {
  return this.http.get(`http://localhost:6001/card/get`)
}
getCartItems(): any[] {
  return this.cartItems;
}
savecarddata(c_image:any)
{
  console.log("service"+c_image)
  return this.http.post(`http://localhost:6001/card/add-image-data`,c_image)

}
getcarimageinformation(img:any)
{
  return this.http.get(`http://localhost:6001/admin/getimage`)

}
remove_item(u_id:any,image:any)
{
  const url = `http://localhost:6001/card/delete?u_id=${u_id}&image=${image}`;

  return this.http.delete(url) 
}
set_no_of_card(num:any)
{
  this.Number_of_card_data=num
}
get_no_of_carddara()
{

  return this.http.get(`http://localhost:6001/card/get_card_data`)
 
}
get_all_user()
{
  
}
}

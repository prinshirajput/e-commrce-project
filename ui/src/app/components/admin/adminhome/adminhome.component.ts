import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../public/authservice/auth.service';
import { Router } from '@angular/router';
import { AdminServiceService } from '../Adminservice/admin-service.service';
import {  NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit{
  name:any;
  id:any;
  showImage:any=true;
  counter:any=0;
  constructor(private Admin:AdminServiceService,private route: ActivatedRoute,private authservice:AuthService,private router: Router)
  {
  }

  ngOnInit(): void {
  

    this.checkUrl();
  
    // Subscribe to router events to handle changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("hi");
  
        // Set the flag based on the URL
        this.checkUrl();
      }
    });
  this.name=localStorage.getItem("name")  
  this.id=localStorage.getItem("id")
  this.router.events.subscribe((event) => {
    
    if (event instanceof NavigationEnd) {
      this.showImage = event.url === '/admin'; // Set the flag based on the URL
    }
  });
  }
  // viewprofile(
    
  // )
  // {
  //   this.router.navigateByUrl(`/viewprofile/${this.id}`);
  // }
// signup()
// {
//  this.router.navigate(['/siginup'])
// }
// open_edit_page()
// {
  
// }
checkUrl() {
  // Get the current URL from the Router service
  const currentUrl = this.router.url;
this.count()
  // Check if the URL ends with '/user'
  this.showImage = currentUrl.endsWith('/admin');
}
count()
{
  console.log("-->",this.showImage)

  this.counter++;
  console.log("--->",this.counter)

}
signOut()
{
  localStorage.clear()
  this.router.navigate(['/login'])
}

}

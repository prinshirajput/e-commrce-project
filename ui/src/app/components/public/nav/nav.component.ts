import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserserviceService } from '../../user/service/userservice.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  implements OnInit{
  item:any
  constructor(private router: Router,private dialog: MatDialog,private userservice:UserserviceService) { }
  ngOnInit(): void {
   setTimeout(
()=>{
  this.item = localStorage.getItem("card");
  this.item = JSON.parse(  this.item);
},2000
   )
     

   
  }
  
  gotoshop()
  {
    this.router.navigate(['/shop']),(error:any)=>{
    };

  }
  gotoblog()
  {
    this.router.navigate(['/blog']),(error:any)=>{
    };
  }
  gotoabout()
  {
    this.router.navigate(['/about']),(error:any)=>{

  }
 
}
gotcontact()
{
  this.router.navigate(['/contact']),(error:any)=>{

  }

}
signup()
{
 this.router.navigate(['/siginup'])
}


}
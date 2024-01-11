import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../public/authservice/auth.service';
import { Router } from '@angular/router';
import { AdminServiceService } from '../Adminservice/admin-service.service';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit{
  name:any;
  id:any;
  constructor(private Admin:AdminServiceService,private route: ActivatedRoute,private authservice:AuthService,private router: Router)
  {
  }

  ngOnInit(): void {
    // Access the route parameter 'id'
  this.name=localStorage.getItem("name")  
  this.id=localStorage.getItem("id")
  }

  viewprofile()
  {
    this.router.navigateByUrl(`/viewprofile/${this.id}`);
  }
  
  logout()
  {
    localStorage.clear()
    this.router.navigateByUrl(`/home`);

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

import { Component ,OnInit} from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../public/authservice/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit{
  name:any;
  id:any;
  item:any;
  showImage=true;
  likedata:any;
  like=localStorage.getItem('like')
  constructor(private userservice:UserserviceService,private route: ActivatedRoute,private authservice:AuthService,private router: Router)
  {
    
  }

  ngOnInit(): void {
  
    setInterval(() => {
      this.updateName();
    }, 1000);
  this.checkUrl();

  // Subscribe to router events to handle changes
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      console.log("hi");

      // Set the flag based on the URL
      this.checkUrl();
    }
  });

  this.name = localStorage.getItem('name');
  console.log("hii", this.name);




  this.name=localStorage.getItem('name')
    console.log("hii",this.name)
    // Access the route parameter 'id'
 
    // setTimeout(
    //   ()=>{
    //     this.item = localStorage.getItem("card");
    //     this.item = JSON.parse(  this.item);
    //   },1000
    //      )
  }
  viewprofile()
  {
    this.router.navigateByUrl(`user/view_profile`);
  }
  
  logout()
  {
    localStorage.clear()
    this.router.navigateByUrl(`/login`);

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
checkUrl() {
  // Get the current URL from the Router service
  const currentUrl = this.router.url;

  // Check if the URL ends with '/user'
  this.showImage = currentUrl.endsWith('/user');
  console.log("showImage ", this.showImage);
}
updateName()
{

  this.item = localStorage.getItem("card");
        this.item = JSON.parse(  this.item);
        this.likedata=localStorage.getItem('like')
        if(this.likedata==0)
        {
           
        }
        else{

        }

        this.like=localStorage.getItem('like')
}
help()
{
  alert("this is not added now")
}
}

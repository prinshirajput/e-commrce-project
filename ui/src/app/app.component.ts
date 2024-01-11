import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fn="123"
  an="456"
  name=this.fn+this.an;
  title = 'ui';
  showImage: boolean = true; // Initialize the flag
  constructor( private router: Router) { 
      
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
    
      if (event instanceof NavigationEnd) {
        this.showImage = event.url === '/'; // Set the flag based on the URL
      }
    });
}
}
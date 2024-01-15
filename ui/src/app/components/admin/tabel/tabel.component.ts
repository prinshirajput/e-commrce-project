import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../Adminservice/admin-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit{
  All_users:any;
  constructor(private adminservice:AdminServiceService,private router: Router)
  {

  }
  ngOnInit(): void {
   this.get_all_users()
    


  }
  get_all_users()
  {
    this.adminservice.get_all_users().subscribe((result:any)=>
    {
      this.All_users=result.data
      console.log(this.All_users)

    })
  }
  open_edit_page(id:any)
  {
    this.router.navigate([`admin/view_profile/${id}`])
  }

}

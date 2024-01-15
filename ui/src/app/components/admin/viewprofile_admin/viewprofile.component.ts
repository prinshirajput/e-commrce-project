import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { UserserviceService } from '../../user/service/userservice.service';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent_admin implements OnInit {
  updateForm!: FormGroup;
  updateon=false
  u_id:any;
  id:any;
   uname:any;
   uemail:any;
   upassword:any;
   ugender:any;
 error:any;
constructor(private route: ActivatedRoute, private userservice: UserserviceService, private fb: FormBuilder,private _location: Location) {
  this.updateForm = this.fb.group({
    name: ['', Validators.required],
    email: [''],
    password: [''],
    gender: [''],
    id:this.u_id,
    // Add other form controls if needed
  });

  this.id=localStorage.getItem('id')


   
  
}



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("product detaill")
      this.u_id = params['id'];
      this.userservice.feachbyid(this.u_id).subscribe((data: any) => {
        this.uname = data.name;
        this.upassword = data.password;
        this.uemail = data.email;
        this.ugender = data.gender;
  
        this.updateForm.patchValue({
          name: this.uname,
          email: this.uemail,
          password: this.upassword,
          gender: this.ugender,
          id:this.u_id,
          // Patch other form controls if needed
        });
      });
   
    });
 
  }
  editclick()
  {
    this.updateon=true;
  }
  onSubmit(): void {
  
    this.userservice.updatedata(this.updateForm.value).subscribe((data: any) => {
         
          if(data.success==true)
          {
           
            // this._location.back();
            window.location.reload()

          }
          else
          {
            this.error=data.msg
          }
    });

  }

  onCancel(): void {
  console.log('Edit canceled');
  }

}

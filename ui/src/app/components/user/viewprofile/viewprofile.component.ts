import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  updateForm!: FormGroup;
  updateon=false
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
    id:this.id,
    // Add other form controls if needed
  });

  this.id=localStorage.getItem('id')


    this.userservice.feachbyid(this.id).subscribe((data: any) => {
          
      this.uname = data.name;
      this.upassword = data.password;
      this.uemail = data.email;
      this.ugender = data.gender;

      this.updateForm.patchValue({
        name: this.uname,
        email: this.uemail,
        password: this.upassword,
        gender: this.ugender,
        id:this.id,
        // Patch other form controls if needed
      });
    });
  
}



  ngOnInit(): void {
 
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

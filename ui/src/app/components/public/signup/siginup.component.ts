import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { UserserviceService } from '../../user/service/userservice.service';
@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})
export class SiginupComponent { 
 loginForm: FormGroup;
submitted = false;
showLoginCodeInput: boolean = false;
showSignupCodeInput: boolean = false;
showLoginMsg: any = '';
showErrorMsg: any = '';
userRole: any = '';
authLoad: boolean = false;
passwordMismatch: any = false;
smsg='';
fmsg=''
constructor(private fb: FormBuilder,private userservice : UserserviceService) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phone: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    cpassword: ['', Validators.required] ,
    fname: ['', [Validators.required]],
    lname:['', [Validators.required]],
    gender: ['', Validators.required],

  });
}

onSubmit() {
  console.log(this.loginForm.value);

  this.submitted = true;
  const data={
    "name":this.loginForm.get('fname')?.value+" "+this.loginForm.get('lname')?.value,
    "email":this.loginForm.get('email')?.value,
    "password":this.loginForm.get('password')?.value,
    "phone":this.loginForm.get('phone')?.value,
    "gender":this.loginForm.get('gender')?.value,



  }

  this.userservice.saveUser(data).subscribe(
  (response) => {
    console.log('API Response:', response);
    if(response.status='true')
    {
      this.loginForm.reset();
      this.submitted = false;

      this.smsg='User Ragistration sucessfully'

    }
    else
    {
      this.fmsg='User Ragistration unsucessfully'
    }
  },
  (error) => {
    console.error('API Error:', error);
    // Handle errors as needed
  }
)
}

get fc() {
  const retvalue=this.loginForm.controls;
 
  return this.loginForm.controls;
}

onInputChange() {
  this.submitted = false;
  const password = this.loginForm.get('password')?.value;
const cpassword = this.loginForm.get('cpassword')?.value;
this.passwordMismatch = password !== cpassword;
if(this.passwordMismatch)
{
  // this.submitted = true;

  this.passwordMismatch='password mis match'
}
  }
}
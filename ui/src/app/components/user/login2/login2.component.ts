import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
 import { UserserviceService } from '../service/userservice.service';
 import { Router } from '@angular/router';
 import { HttpHeaders } from '@angular/common/http';
 import { AuthService } from '../../public/authservice/auth.service';
 @Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  msg:any;
  loginForm: FormGroup;
  submitted = false;
  showLoginCodeInput: boolean = false;
  showSignupCodeInput: boolean = false;
  showLoginMsg: any = '';
  showErrorMsg: any = '';
  userRole: any = '';
  authLoad: boolean = false;
 
  
  constructor(private fb: FormBuilder,private userservice : UserserviceService,private router: Router,private authservice:AuthService)
  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
     
      password: ['', [Validators.required,]],
    
  
    });
  }
  
  onSubmit() {
    console.log(this.loginForm.value);
  
    this.submitted = true;
    const data={
      "email":this.loginForm.get('email')?.value,
      "password":this.loginForm.get('password')?.value,
    }
     
    this.userservice.LoginUser(data).subscribe(
    (response) => {
      this.authservice.setToken(response.token);
      // localStorage.setItem('authToken', response.token);
      console.log('API Response:', response);

      //  const tokent = localStorage.setItem(response.tokent);
        this.userservice.setUserDetails(data.email).subscribe( (data:any) => {
          localStorage.setItem("id",data._id)

          localStorage.setItem("name",data.name)
          localStorage.setItem("email",data.email)
          localStorage.setItem("password",data.password)
          localStorage.setItem("gender",data.gender)
          localStorage.setItem("role",data.role)
          
          const name=data.name
          const id=data._id
          if(data.role=="user")
          {
            this.router.navigateByUrl(`/user`);

          }
          else
          {
            this.router.navigateByUrl(`/admin`);

          }
         
})
    },
    (error) => {
      this.msg="Incorrect Credentials"

      console.error('API Error:', error);
      // Handle errors as needed
    }
  )
  }
  get fc() {
    const retvalue=this.loginForm.controls;
    console.log(retvalue)
    return this.loginForm.controls;
  }
  
  
  }

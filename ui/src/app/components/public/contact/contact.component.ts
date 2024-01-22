import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
email=localStorage.getItem('email')
contactForm:any= FormGroup;

constructor(private fb: FormBuilder,private http: HttpClient) { }

ngOnInit() {
  // Initialize the form group with validation
  this.contactForm = this.fb.group({
    msg: ['', Validators.required] ,
    name:localStorage.getItem('email')// 'msg' corresponds to the textarea name attribute
  });
}
onSubmit() {
  // Access the value of the textarea using this.contactForm.value.msg
  const message = this.contactForm.value.msg;
  console.log('Submitted message:', message);
  console.log('name :', this.contactForm.value.name);
this.http.post('http://localhost:6001/user/mailer',this.contactForm.value).subscribe((result:any)=>{
  console.log(result)
})
}
}

import { Component, OnInit  } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-img-produc',
  templateUrl: './img-produc.component.html',
  styleUrls: ['./img-produc.component.css']
})
export class Admin_IMGPRODUCComponent implements OnInit {
  
  women_prodect=false;
  loginForm: any = FormGroup;
  APIURLf = 'http://localhost:6001/admin/add';
  APIURLg= 'http://localhost:6001/admin/get';

  users : any;
  submitted: boolean = false;
  image : any = '';
  imageName: any = '';
  base64Image:any;
  imges:any;
  Woman_filter_toggle=false
  filter_data_woman:any=[];
  
  constructor( private fb: FormBuilder, 
              private http :HttpClient, 
              private router :Router,
              private activatedRoute :ActivatedRoute
              ) {}

ngOnInit(): void {
 this. createForm()

}



get fc() { return this.loginForm.controls; }
  createForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required, ],
      price: ['', Validators.required],
      image: ['', Validators.required],
      category:['',Validators.required]
    });
  }
onSelectedFile(event: any): void {
  this.image  = event.target.files[0];
  console.log("this.image------->",this.image)
  this.imageName = event.target.files[0].name;

  console.log("base64Image",this.base64Image)
}
loginFormSubmit(data:any)
{
  console.log(data)
  const reader = new FileReader();

  reader.onload = (e: any) => {
    this.base64Image = e.target.result;
    const data2=
    {
     "name":data.name,
     "price":data.price,
     "image":   this.base64Image,
     "category":data.category
    }
    console.log('data2',data2);
    this.submitted = true;
    this.http.post(this.APIURLf,data2).subscribe((result:any)=>{
      console.log('result',result);
      if(result.success == false){
        this.users = result;
        // this.router.navigateByUrl('/home');
      }
      else{
       alert("Add product Sucesfully ");
      }
    });


  };
  reader.readAsDataURL(this.image);
     console.log(' this.loginForm.image', this.loginForm.image);
}

}
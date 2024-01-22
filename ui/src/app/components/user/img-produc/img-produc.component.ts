import { Component, DestroyRef, EventEmitter, Input, OnDestroy, OnInit, Output  } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-img-produc',
  templateUrl: './img-produc.component.html',
  styleUrls: ['./img-produc.component.css']
})
export class IMGPRODUCComponent2 implements OnInit,OnDestroy {
   likeInterval: any;


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
  liked:any=false
  brakloop=true;
  likes_all_product:any=[]
  nav_like_show:any=0;
  constructor( private fb: FormBuilder, 
              private http :HttpClient, 
              private router :Router,
              private activatedRoute :ActivatedRoute
              ) {}

ngOnInit(): void {
  this.women_prodect=false;
 this. createForm()
 this.http.get(this.APIURLg).subscribe((result:any)=>{
 this.imges=result.data
 for(let i in this.imges)
 {

  const data={
    "like":"false",
    "image":this.imges[i].image,
    "u_id":localStorage.getItem("id")
  }
  console.log("data------------>",data)
  this.http.post('http://localhost:6001/like/add',data).subscribe((result:any)=>{
    console.log('result',result);
  });
 }
})
 this.likeInterval= setInterval(()=>{
this.getLike(localStorage.getItem('id'))
},1000)
}
All_product_show()
{
  this.women_prodect=false
  this.Woman_filter_toggle=false
}

  role:any=localStorage.getItem("role")
  womanproduct()
{
  this.women_prodect=true;

 
  
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
       alert(result.msg);
      }
    });


  };
  reader.readAsDataURL(this.image);
     console.log(' this.loginForm.image', this.loginForm.image);
}
filter(categories:any)
{
this.Woman_filter_toggle=true;
this.filter_data_woman=[]
  console.log("image",this.image)
  console.log(this.imges)

  for (let i in this.imges) {
    if (this.imges[i].img_category === categories) {
      
      this.filter_data_woman.push(this.imges[i]);
    }
  }
  console.log(this.filter_data_woman)
}

toggleLike(imageName:any,value:any,id:any): void {
  this.liked=value;
  console.log(this.liked)
 const data={
    "like":this.liked,
    "image":imageName,
    "id":id
    // "u_id":localStorage.getItem("id")
  }
  this.http.put('http://localhost:6001/like/update',data).subscribe((result:any)=>{
    console.log('result',result);
   
  });


 
}
ngOnDestroy(): void {
  // Clear the interval when the component is destroyed
  clearInterval(this.likeInterval);
}

getLike(u_id: any): void {
  // this.nav_like_show=0;
  this.http.get(`http://localhost:6001/like/get/${u_id}`).subscribe((result: any) => {
    this.nav_like_show=0;
    this.likes_all_product = result.data;
    for(let i in this.likes_all_product)
    {
      if(result.data[i].like)
      {
        this.nav_like_show++;
        console.log("this_all_product",result.data[i].like)
      }
    }
    setTimeout(()=>{
      localStorage.setItem('like',this.nav_like_show)
    },1000)
    

    



  });

}




}
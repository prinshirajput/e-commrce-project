import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from '../service/userservice.service';
@Component({
  selector: 'app-like-product',
  templateUrl: './like-product.component.html',
  styleUrls: ['./like-product.component.css']
})
export class LikeProductComponent implements OnInit, OnDestroy{
  likes_all_product: any=[];
  nav_like_show: any;
  imges:any;
  liked: any;
  c_image:any;
  likeInterval:any;
    constructor(private http:HttpClient,private userservice: UserserviceService)
  {

  }
  ngOnInit(): void {
    const id=localStorage.getItem('id')
  this.likeInterval=setInterval(()=>{
    this.getLike(id)
  },1000)
    this.c_image=localStorage.getItem('card_image')
  
    const data={
      "c_image":this.c_image,
      "u_id":localStorage.getItem('id')
      
    }
    
    this.userservice.getcardimg().subscribe((result:any)=>{
      console.log("result",result)

    })
this.get_all_like();
  //   const u_id=localStorage.getItem('id')
  //   this.http.get(`http://localhost:6001/like/get/${u_id}`).subscribe((result: any) => {

  //   for(let i in  result.data)
  //   {
  //     console.log( result.data[i].like)

  //     if(   result.data[i].like)
  //     {
  //       this.likes_all_product.push(result.data[i])

  //     }
  //   }
  //   console.log("this_all_product", this.likes_all_product)


  //   // setTimeout(()=>{
  //   //   localStorage.setItem('like',this.nav_like_show)
  //   // },1000)
    

    

  //   // for(let i in this.likes_all_product)
  //   // {
  //   //   if(this.likes_all_product[i].like=true)
  //   //    {
  //   //     console.log("------------->",this.likes_all_product[i].like);
  //   //   }
  //   //    else{
  //   //     console.log("no")
  //   //    }
  //   // }
  //   // localStorage.setItem('like',this.nav_like_show)


  // }); 
  }
  get_all_like()
  {
    const u_id=localStorage.getItem('id')
    this.http.get(`http://localhost:6001/like/get/${u_id}`).subscribe((result: any) => {
this.nav_like_show=0;
    for(let i in  result.data)
    {
      console.log( result.data[i].like)

      if(   result.data[i].like)
      {
        this.nav_like_show++;
        this.likes_all_product.push(result.data[i])

      }
    }
    console.log("this_all_product", this.likes_all_product)


    setTimeout(()=>{
      localStorage.setItem('like',this.nav_like_show)
    },1000)
    

    

    for(let i in this.likes_all_product)
    {
      if(this.likes_all_product[i].like=true)
       {
        console.log("------------->",this.likes_all_product[i].like);
      }
       else{
        console.log("no")
       }
    }
    localStorage.setItem('like',this.nav_like_show)


  }); 
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
    if(!this.liked)
    {
this.get_all_like()
    }
  
  
   
  }

getLike(u_id: any): void {
  // this.nav_like_show=0;
  this.http.get(`http://localhost:6001/like/get/${u_id}`).subscribe((result: any) => {
    this.likes_all_product=[]
    this.nav_like_show=0;
    // this.likes_all_product = result.data;
    for(let i in result.data)
    {
      if(result.data[i].like)
      {

        this.nav_like_show++;
        this.likes_all_product.push(result.data[i])
        // console.log("this_all_product",result.data[i].like)
      }
    }
    setTimeout(()=>{
      localStorage.setItem('like',this.nav_like_show)
    },1000)
    

    



  });

}


ngOnDestroy(): void {
  // Clear the interval when the component is destroyed
  clearInterval(this.likeInterval);
}

}

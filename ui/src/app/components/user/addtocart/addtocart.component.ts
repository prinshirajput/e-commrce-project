import { Component,OnInit} from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../../admin/Adminservice/admin-service.service';
@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit{
  constructor(private route: ActivatedRoute,private router: Router,private fb: FormBuilder,private adminService:AdminServiceService,private userservice:UserserviceService)
  {
  }
  c_image:any;
  imges:any=[]
  alldata:any=[]
 totel_price:any=0;
 dis:number=0
 Final_price=0
 totel_item=0
 remove_item_array:any=[]
 isLiked = false;

 toggleLike() {
   this.isLiked = !this.isLiked;
 }
ngOnInit(): void {
  this.c_image=localStorage.getItem('card_image')
  
  const data={
    "c_image":this.c_image,
    "u_id":localStorage.getItem('id')
    
  }  
  this.userservice.savecarddata(data).subscribe((data)=>{

    //  console.log(data)
  })
  this.userservice.getcardimg().subscribe((result:any)=>{
    const data=result.data
    //  console.log(data)
  for(let i in  data)
  {
    this.userservice.getcarimageinformation(this.c_image).subscribe((result2:any)=>{
      const data2=result2.data
           for(let k in data2)
           {
            if(data2[k].image==data[i].card_image)
            {
              if(data[i].u_id==localStorage.getItem('id'))
              {
                this.alldata.push(data2[k])

                  this.imges.push(data[i].card_image);
                 // console.log(this.imges[i])
              }
            }
           }
    })
   
  }
  
  setTimeout(
()=>{
  for(let i in this.alldata)
  {
    this.totel_item++;
   const price=parseFloat(this.alldata[i].img_price)
   this.totel_price=this.totel_price+price
  }
  this.dis=this.totel_price*10/100
  this.Final_price=this.totel_price-this.dis
  this.userservice.set_no_of_card(this.totel_item)
}
  ,1000)

  })
  setTimeout(()=>{
    const jsonString = JSON.stringify(this.totel_item);

    localStorage.setItem('card', jsonString);
  },2000)
 
}

remove_item(img:any)
{
  localStorage.removeItem('card_image');
  const u_id=localStorage.getItem("id")
 const data={
  'u_id':u_id,
  'img':img
  }
  this.userservice.remove_item(u_id,img).subscribe((result2:any)=>{
console.log(result2)
if(result2.sucess=true)
{
  window.location.reload()
}
  }
  )
}
// remove_item(img: any) {
//   this.imges.length=0;
//   console.log(this.alldata);

//   // Create a new array without the elements to be removed
//   this.remove_item_array = this.alldata.filter((data:any) => data.image !== img);

//   console.log("remove_item_array", this.remove_item_array);
//   for(let i in this.remove_item_array)

// { 
  
//    this.imges.push(this.remove_item_array[i].image)
// }
// this.remove_item=this.alldata;
// }



// kk code
// ngOnInit(): void {
//   this.route.params.subscribe(params => {
//     this.c_image = params['image'];
//   });

//   const data = {
//     "c_image": this.c_image,
//     "u_id": localStorage.getItem('id')
//   };

//   console.log(this.c_image);

//   this.userservice.savecarddata(data).subscribe((data) => {
//     // console.log(data);
//   });

//   this.userservice.getcardimg().subscribe((result: any) => {
//     const data = result.data;

//     for (let i in data) {
//       this.userservice.getcarimageinformation(this.c_image).subscribe((result2: any) => {
//         console.log("r2", result2);
//         const data2 = result2.data;
//         this.alldata.push(result2.data[i]);

//         for (let k in data2) {
//           if (data2[k].image == data[i].card_image) {
//             if (data[i].u_id == localStorage.getItem('id')) {
//               this.imges.push(data[i].card_image);
//             }
//           }
//         }
//       });
//     }
//     console.log(this.alldata);

//     // Extracting _id values from alldata array
//     const ids = this.alldata.map((item: { _id: any; }) => item._id);
//     console.log("+++++>"+ids);
//   });
// }
// priyanshi solanki owener of this project


}

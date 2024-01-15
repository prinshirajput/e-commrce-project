import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../../admin/Adminservice/admin-service.service';
@Component({
  selector: 'app-prodectdetails',
  templateUrl: './prodectdetails.component.html',
  styleUrls: ['./prodectdetails.component.css']
})
export class ProdectdetailsComponent implements OnInit{
  quantitye: any = 1;
  image:any;
  card_images:any=[]
  productForm:any= FormGroup;
p_id:any;
showImage: boolean = true; // Initialize the flag

toogle=false;
  baseImageUrl = 'http://localhost:6001/';
  constructor(private route: ActivatedRoute,private router: Router,private fb: FormBuilder,private adminService:AdminServiceService)
  {
  }

  ngOnInit(): void {
    // Access the route parameter 'id'
    this.route.params.subscribe(params => {
      console.log("product detaill")
      this.image = params['image'];
      this.p_id = params['p_id'];

     console.log(this.p_id,this.image)
   
    });
    
    this.productForm = this.fb.group({
      size: ['', Validators.required],
      color: ['', Validators.required],
      quantity: [this.quantitye, [Validators.required, Validators.min(1)]],
      p_image:this.image
    });
  }
  get size() { return this.productForm.get('size'); }
  get color() { return this.productForm.get('color'); }
  get quantity() { return this.productForm.get('quantity'); }
  onSubmit(): void {
    console.log(this.productForm.value)
    // http://localhost:6001/img_data/update-image-data
    if (this.productForm.valid) {
      this.adminService.save_product_details(this.productForm.value).subscribe((result)=>{
   console.log(result)
      })
    
    } else {
      // Form is invalid, mark fields as touched to display validation messages
      this.productForm.markAllAsTouched();
    }
  }
  increment(): void {
    this.quantitye++;
  }

  decrement(): void {
    if (this.quantitye > 1) {
      this.quantitye--;
    }
  }
  ADD_to_cart(img:any)
  {

    this.toogle=true
         localStorage.setItem('card_image',   this.image);

    // localStorage.setItem('card_image', '/image/' + this.image);
    this.router.navigate(['user/card']);

  }
}

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { UserhomeComponent } from './userhome/userhome.component';
// import { Login2Component } from './login2/login2.component';
// import { AddtocartComponent } from './addtocart/addtocart.component';
// import { ProdectdetailsComponent } from './prodectdetails/prodectdetails.component';
// import { ViewprofileComponent } from './viewprofile/viewprofile.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from 'src/app/app-routing.module';
// @NgModule({
//   declarations: [
//     UserhomeComponent,
//     Login2Component,
//     AddtocartComponent,
//     ProdectdetailsComponent,
//     ViewprofileComponent

//   ],
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     RouterModule,
//     AppRoutingModule,

//   ],
//   providers: [],
//   bootstrap: []
// })
// export class UserModule { }
// user.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { Login2Component } from './login2/login2.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ProdectdetailsComponent } from './prodectdetails/prodectdetails.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { FotterComponent } from './fotter/fotter.component';
import { IMGPRODUCComponent2} from './img-produc/img-produc.component';
import { NotificationuserComponent } from './notification/notification.component';
import { LikeProductComponent } from './like-product/like-product.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
@NgModule({
  declarations: [
    UserhomeComponent,
    Login2Component,
    AddtocartComponent,
    ProdectdetailsComponent,
    ViewprofileComponent,
    IMGPRODUCComponent2,
    FotterComponent,
    NotificationuserComponent,
    LikeProductComponent,
    MakePaymentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
})
export class UserModule { }

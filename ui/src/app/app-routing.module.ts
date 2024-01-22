import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './components/user/userhome/userhome.component';
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';
import { ViewprofileComponent } from './components/user/viewprofile/viewprofile.component';
import { ProdectdetailsComponent } from './components/user/prodectdetails/prodectdetails.component';
import { AddtocartComponent } from './components/user/addtocart/addtocart.component';
import { Login2Component } from './components/user/login2/login2.component';
import { SiginupComponent } from './components/public/signup/siginup.component';
import { ShopComponent } from './components/public/shop/shop.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { AboutComponent } from './components/public/about/about.component';
import { IMGPRODUCComponent } from './components/public/img-produc/img-produc.component';
import { TabelComponent } from './components/admin/tabel/tabel.component';
import { ViewprofileComponent_admin } from './components/admin/viewprofile_admin/viewprofile.component';
import { Admin_IMGPRODUCComponent } from './components/admin/admin_img-produc/img-produc.component';
import { ShowAllProductComponent } from './components/admin/show-all-product/show-all-product.component';
import { NotificationComponent } from './components/admin/notification/notification.component';
import { DeshboredComponent } from './components/admin/deshbored/deshbored.component';
import { AuthGuard } from './components/public/Gard/auth.guard';
import { AppComponent } from './app.component';
import { AuthGuardadmin } from './components/public/AdminGard/auth.guard';
import { IMGPRODUCComponent2 } from './components/user/img-produc/img-produc.component';
import { NotificationuserComponent } from './components/user/notification/notification.component';
import { MakePaymentComponent } from './components/user/make-payment/make-payment.component';
import { LikeProductComponent } from './components/user/like-product/like-product.component';
const routes: Routes = [
  { path: 'user',canActivate:[AuthGuard], component: UserhomeComponent,
children:[
  { path: 'notification', canActivate:[AuthGuard],component:  NotificationuserComponent},
{  path:'payment',canActivate:[AuthGuard],component:MakePaymentComponent},
  { path: 'shop',canActivate:[AuthGuard], component: IMGPRODUCComponent2 },
  { path: 'about', canActivate:[AuthGuard],component: AboutComponent },
  { path: 'blog',canActivate:[AuthGuard], component: BlogComponent },
  { path: 'like',canActivate:[AuthGuard], component: LikeProductComponent },

  { path: 'contact',canActivate:[AuthGuard], component: ContactComponent },
  {path:'view_profile',canActivate:[AuthGuard],component:ViewprofileComponent},
  // {path:'prodect/:image/:p_id',canActivate:[AuthGuard],component:ProdectdetailsComponent},
  { path: 'prodect/:image/:p_id', canActivate:[AuthGuard], component: ProdectdetailsComponent },

  { path: 'card', canActivate:[AuthGuard],component: AddtocartComponent },
] },
  { path: 'admin',canActivate:[AuthGuardadmin],component: AdminhomeComponent,
  children:[
    {path:'',canActivate:[AuthGuardadmin],component:AdminhomeComponent},
    {path:'tabel',component:TabelComponent},
    {path:'view_profile/:id',canActivate:[AuthGuardadmin],component:ViewprofileComponent_admin},

    { path: 'add_product', canActivate:[AuthGuardadmin],component: Admin_IMGPRODUCComponent },
    { path: 'show_product', canActivate:[AuthGuardadmin],component:  ShowAllProductComponent},
    { path: 'notification', canActivate:[AuthGuardadmin],component:  NotificationComponent},
    { path: 'desh', canActivate:[AuthGuardadmin],component:  DeshboredComponent},
  ] },
//  { path: 'login', component: Login2Component, outlet: 'userOutlet' },

  { path: 'login', component: Login2Component },
  { path: 'signup', component: SiginupComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: AppComponent, outlet: 'userOutlet' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

 }

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

const routes: Routes = [
  { path: 'user', component: UserhomeComponent,
children:[
 
  { path: 'shop', component: IMGPRODUCComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  {path:'view_profile',component:ViewprofileComponent},
  {path:'prodect/:image/:p_id',component:ProdectdetailsComponent},
  { path: 'card', component: AddtocartComponent },


] },
  { path: 'admin', component: AdminhomeComponent,
  children:[
    {path:'',component:AdminhomeComponent},
   
  
  
  ] },
  { path: 'login', component: Login2Component },
  { path: 'signup', component: SiginupComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

 }

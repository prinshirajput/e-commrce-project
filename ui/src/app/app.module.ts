import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './components/user/user.module';
import { AdminModule } from './components/admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/public/about/about.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { FotterComponent } from './components/public/fotter/fotter.component';
import { ShopComponent } from './components/public/shop/shop.component';
import { NavComponent } from './components/public/nav/nav.component';
import { MatDialogModule } from '@angular/material/dialog';
import {  ReactiveFormsModule } from '@angular/forms';
import { IMGPRODUCComponent } from './components/public/img-produc/img-produc.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SiginupComponent } from './components/public/signup/siginup.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    FotterComponent,
    NavComponent,
    ShopComponent,
    IMGPRODUCComponent,
    SiginupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

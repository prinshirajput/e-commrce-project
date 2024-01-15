import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FotterComponent } from './fotter/fotter.component';
import { Admin_IMGPRODUCComponent } from './admin_img-produc/img-produc.component';
import { RouterModule } from '@angular/router';
import { TabelComponent } from './tabel/tabel.component';
import { ViewprofileComponent_admin } from './viewprofile_admin/viewprofile.component';
import { ShowAllProductComponent } from './show-all-product/show-all-product.component';
import { NotificationComponent } from './notification/notification.component';
import { DeshboredComponent } from './deshbored/deshbored.component';
@NgModule({
  declarations: [
    AdminhomeComponent,
    FotterComponent,
    Admin_IMGPRODUCComponent,
        TabelComponent,
    ViewprofileComponent_admin,
    ShowAllProductComponent,
    NotificationComponent,
    DeshboredComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AdminModule { }

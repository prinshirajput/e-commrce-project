import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FotterComponent } from './fotter/fotter.component';
@NgModule({
  declarations: [
    AdminhomeComponent,
    FotterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }

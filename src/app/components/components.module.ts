import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPrecioComponent } from './navbar-precio/navbar-precio.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarPrecioComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavbarPrecioComponent
  ]
})
export class ComponentsModule { }

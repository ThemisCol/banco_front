import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { QueryComponent } from './query/query.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [QueryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }

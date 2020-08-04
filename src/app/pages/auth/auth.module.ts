import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitdCreditoComponent } from './solicitd-credito/solicitd-credito.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [SolicitdCreditoComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }

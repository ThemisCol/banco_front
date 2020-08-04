import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitdCreditoComponent } from './solicitd-credito/solicitd-credito.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'solicitar-credito' },
  {
    path: 'solicitar-credito', component: SolicitdCreditoComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'solicitar-credito' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

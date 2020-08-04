import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'query' },
  {
    path: 'query', component: QueryComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'query' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ApiComponent} from './components/app/api/api.component';

const routes: Routes = [
  { path: '', component: ApiComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

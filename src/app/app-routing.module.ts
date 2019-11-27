import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {LancamentosComponent} from './lancamentos/lancamentos.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'lancamentos',
    component: LancamentosComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

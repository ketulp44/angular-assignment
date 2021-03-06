import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:() => import('./shared/shared.module').then(mod => mod.SharedModule),
 },
{
  path: 'login',
  component: LoginComponent   
},
{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

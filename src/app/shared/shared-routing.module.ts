import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { FeaturesModule } from '../features/features.module';
import { HomeComponent } from '../features/home/home.component';
import { ContainerComponent } from '../features/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: ()=>import('./../features/features.module').then(mod=>mod.FeaturesModule) ,
    // children:[]
    // ,
    canActivateChild: [AuthGuard],    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

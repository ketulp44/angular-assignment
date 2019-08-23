import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeaturesModule } from '../features/features.module';
@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FeaturesModule
  ],
  exports:[LoginComponent, DashboardComponent]
})
export class SharedModule { }

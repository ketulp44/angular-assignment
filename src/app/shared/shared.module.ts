import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeaturesModule } from '../features/features.module';
import { HeaderComponent } from './header/header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
@NgModule({
  declarations: [LoginComponent, DashboardComponent,HeaderComponent,SidebarMenuComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    // FeaturesModule
  ],
  exports:[LoginComponent, DashboardComponent]
})
export class SharedModule {
  constructor(){
    console.log('shared module');
    
  }
 }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ContainerComponent, HomeComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  exports: [
    ContainerComponent,HomeComponent
  ]
})
export class FeaturesModule {
  
  constructor(){
    console.log('feature module');
  }
}

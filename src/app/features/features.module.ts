import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [HeaderComponent, SidebarMenuComponent, ContainerComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  exports: [
    HeaderComponent, SidebarMenuComponent,ContainerComponent
  ]
})
export class FeaturesModule {}

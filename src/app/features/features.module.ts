import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainertopComponent } from './containertop/containertop.component';
import { ContainerbottomComponent } from './containerbottom/containerbottom.component';
import { DirectiveComponent } from './directive/directive.component';
import { UnlessDirective } from './unless.directive';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormDemoComponent } from './dynamic-form-demo/dynamic-form-demo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideChangeDirective } from './slide-change.directive';

@NgModule({
  declarations: [ContainerComponent, HomeComponent, RegistrationComponent, ContainertopComponent, ContainerbottomComponent, DirectiveComponent, UnlessDirective, HttpDemoComponent, DynamicFormComponent, DynamicFormQuestionComponent, DynamicFormDemoComponent, CarouselComponent, SlideChangeDirective],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ReactiveFormsModule
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

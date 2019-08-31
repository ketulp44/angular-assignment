import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';
import { RegistrationComponent } from './registration/registration.component';
import { DirectiveComponent } from './directive/directive.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { DynamicFormDemoComponent } from './dynamic-form-demo/dynamic-form-demo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HighchartComponent } from './highchart/highchart.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent    
},
{
  path: 'container',
  component: ContainerComponent   
},
{
  path: 'registration',
  component: RegistrationComponent
},
{
  path: 'directive',
  component: DirectiveComponent
},
{
  path: 'http',
  component: HttpDemoComponent
},
{
  path: 'dynamicform',
  component: DynamicFormDemoComponent
},
{
  path: 'carousel',
  component: CarouselComponent
},
{
  path: 'highchart',
  component: HighchartComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

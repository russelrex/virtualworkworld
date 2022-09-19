import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployersRoutingModule } from './employers-routing.module';
import { EmployersInfoComponent } from './employers-info/employers-info.component';
import { EmployersServicesComponent } from './employers-services/employers-services.component';
import { EmployersPricingComponent } from './employers-pricing/employers-pricing.component';

@NgModule({
  declarations: [
       EmployersInfoComponent,
       EmployersServicesComponent,
       EmployersPricingComponent
  ],
  imports: [
    CommonModule,
    EmployersRoutingModule,
  ]
})
export class EmployersModule { }

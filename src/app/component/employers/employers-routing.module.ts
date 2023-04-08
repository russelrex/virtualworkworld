import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployersInfoComponent } from './employers-info/employers-info.component';
import { EmployersServicesComponent } from './employers-services/employers-services.component';
import { EmployersPricingComponent } from './employers-pricing/employers-pricing.component';


const routes: Routes = [
    // { path: '', component: CandidatesComponent },
    { path: 'info', component: EmployersInfoComponent },
    { path: 'services', component: EmployersServicesComponent },
    { path: 'pricing', component: EmployersPricingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployersRoutingModule { }

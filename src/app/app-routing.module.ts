import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './component/coming-soon/coming-soon.component';
import { CorporateComponent } from './component/corporate/corporate.component';
import { HomeComponent } from './component/home/home.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { AccountingComponent } from './component/jobs/accounting/accounting.component';
import { SoftwareComponent } from './component/jobs/software/software.component';
import { WebComponent } from './component/jobs/web/web.component';
import { CallCenterComponent } from './component/jobs/call-center/call-center.component';
import { HumanResourceComponent } from './component/jobs/human-resource/human-resource.component';
import { ProgrammingComponent } from './component/jobs/programming/programming.component';
import { CreativeComponent } from './component/jobs/creative/creative.component';
import { LeadComponent } from './component/jobs/lead/lead.component';
import { LogisticsComponent } from './component/jobs/logistics/logistics.component';
import { EngineeringComponent } from './component/jobs/engineering/engineering.component';
import { ECommerceComponent } from './component/jobs/e-commerce/e-commerce.component';
import { DataEntryComponent } from './component/jobs/data-entry/data-entry.component';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'jobs',
    component: JobsComponent,
    children: [
      {
        path: 'accounting',
        component: AccountingComponent,
      },
      {
        path: 'software',
        component: SoftwareComponent,
      },
      {
        path: 'web',
        component: WebComponent,
      },
      {
        path: 'call-center',
        component: CallCenterComponent,
      },
      {
        path: 'human-resource',
        component: HumanResourceComponent,
      },
      {
        path: 'programming',
        component: ProgrammingComponent,
      },
      {
        path: 'creative',
        component: CreativeComponent,
      },
      {
        path: 'lead',
        component: LeadComponent,
      },
      {
        path: 'logistics',
        component: LogisticsComponent,
      },
      {
        path: 'engineering',
        component: EngineeringComponent,
      },
      {
        path: 'e-commerce',
        component: ECommerceComponent,
      },
      {
        path: 'data-entry',
        component: DataEntryComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

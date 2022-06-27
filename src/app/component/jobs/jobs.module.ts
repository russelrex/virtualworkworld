import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { SoftwareComponent } from './software/software.component';
import { WebComponent } from './web/web.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';
import { ProgrammingComponent } from './programming/programming.component';
import { CreativeComponent } from './creative/creative.component';
import { LeadComponent } from './lead/lead.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { AccountingOneComponent } from './accounting/accounting-one/accounting-one.component';
import { AccountingTwoComponent } from './accounting/accounting-two/accounting-two.component';
import { AccountingThreeComponent } from './accounting/accounting-three/accounting-three.component';


@NgModule({
  declarations: [
    SoftwareComponent,
    WebComponent,
    CallCenterComponent,
    HumanResourceComponent,
    ProgrammingComponent,
    CreativeComponent,
    LeadComponent,
    LogisticsComponent,
    EngineeringComponent,
    ECommerceComponent,
    DataEntryComponent,
    AccountingOneComponent,
    AccountingTwoComponent,
    AccountingThreeComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './component/coming-soon/coming-soon.component';
import { CorporateComponent } from './component/corporate/corporate.component';
import { HomeComponent } from './component/home/home.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { AccountingComponent } from './component/jobs/accounting/accounting.component';
import { AccountingOneComponent } from './component/jobs/accounting/accounting-one/accounting-one.component';
import { AccountingTwoComponent } from './component/jobs/accounting/accounting-two/accounting-two.component';
import { AccountingThreeComponent } from './component/jobs/accounting/accounting-three/accounting-three.component';
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
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { CandidatesComponent } from './component/candidates/candidates.component';
import { SearchComponent } from './component/candidates/search/search.component';
import { InfoComponent } from './component/candidates/info/info.component';
import { JobsCandidateComponent } from './component/candidates/jobs-candidate/jobs-candidate.component';
import { EmployersComponent } from './component/employers/employers.component';
import { EmployersInfoComponent } from './component/employers/employers-info/employers-info.component';
import { EmployersServicesComponent } from './component/employers/employers-services/employers-services.component';
import { EmployersPricingComponent } from './component/employers/employers-pricing/employers-pricing.component';
import { AboutInfoComponent } from './component/about/about-info/about-info.component';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { BlogInfoComponent } from './component/blog/blog-info/blog-info.component';
import { BlogFullComponent } from './component/blog/blog-full/blog-full.component';
import { BlogListsComponent } from './component/blog/blog-lists/blog-lists.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'candidates',
    component: CandidatesComponent,
    children: [
      { path: '', redirectTo: 'info',  pathMatch:'full' },
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'jobs',
        component: JobsCandidateComponent,
      },
    ],
  },
  {
    path: 'employers',
    component: EmployersComponent,
    children: [
      { path: '', redirectTo: 'info',  pathMatch:'full' },
      {
        path: 'info',
        component: EmployersInfoComponent,
      },
      {
        path: 'services',
        component: EmployersServicesComponent,
      },
      {
        path: 'pricing',
        component: EmployersPricingComponent,
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', redirectTo: 'info',  pathMatch:'full' },
      {
        path: 'info',
        component: AboutInfoComponent,
      },
    ],
  },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      { path: '', redirectTo: 'info',  pathMatch:'full' },
      {
        path: 'info',
        component: BlogInfoComponent,
      },
      {
        path: 'full',
        component: BlogFullComponent,
      },
      {
        path: 'list',
        component: BlogListsComponent,
      },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'testimonials/candidate',
    component: TestimonialsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

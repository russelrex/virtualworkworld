import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { CandidatesComponent } from './component/candidates/candidates.component';
import { SearchComponent } from './component/candidates/search/search.component';
import { InfoComponent } from './component/candidates/info/info.component';
import { JobsCandidateComponent } from './component/candidates/jobs-candidate/jobs-candidate.component';
import { EmployersComponent } from './component/employers/employers.component';
import { EmployersInfoComponent } from './component/employers/employers-info/employers-info.component';
import { EmployersServicesComponent } from './component/employers/employers-services/employers-services.component';
import { EmployersPricingComponent } from './component/employers/employers-pricing/employers-pricing.component';
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
    loadChildren: () => import('./component/candidates/candidates.module').then(m => m.CandidatesModule)
  },
  {
    path: 'employers',
    loadChildren: () => import('./component/employers/employers.module').then(m => m.EmployersModule)
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {some_data: 'some value'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

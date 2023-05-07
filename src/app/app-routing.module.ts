import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { JobsComponent } from './component/jobs/jobs.component';

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
    path: 'jobs',
    loadChildren: () => import('./component/jobs/jobs.module').then(m => m.JobsModule)
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

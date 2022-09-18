import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CandidatesRoutingModule } from './candidates-routing.module';
import { JobsComponent } from './jobs/jobs.component';
import { JobsCandidateComponent } from './jobs-candidate/jobs-candidate.component';

@NgModule({
  declarations: [
    SearchComponent,
    JobsComponent,
    JobsCandidateComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
  ]
})
export class CandidatesModule { }

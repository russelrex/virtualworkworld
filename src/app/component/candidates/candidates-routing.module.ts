import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { CandidatesComponent } from './candidates.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
    // { path: '', redirectTo: '/candidates/info', pathMatch: 'full' },
    { path: '', component: CandidatesComponent },
    { path: 'info', component: InfoComponent },
    { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }

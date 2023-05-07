import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoComponent } from './component/candidates/info/info.component';
import { SearchComponent } from './component/candidates/search/search.component';
import { EmployersInfoComponent } from './component/employers/employers-info/employers-info.component';
import { EmployersPricingComponent } from './component/employers/employers-pricing/employers-pricing.component';
import { EmployersServicesComponent } from './component/employers/employers-services/employers-services.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './component/jobs/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    InfoComponent,
    SearchComponent,
    EmployersInfoComponent,
    EmployersPricingComponent,
    EmployersServicesComponent,
    AdminComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CorporateComponent } from './component/corporate/corporate.component';
import { ComingSoonComponent } from './component/coming-soon/coming-soon.component';
import { NgMarqueeModule } from 'ng-marquee';
import { AccountingComponent } from './component/jobs/accounting/accounting.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoComponent } from './component/candidates/info/info.component';
import { SearchComponent } from './component/candidates/search/search.component';
import { EmployersComponent } from './component/employers/employers.component';
import { EmployersInfoComponent } from './component/employers/employers-info/employers-info.component';
import { EmployersPricingComponent } from './component/employers/employers-pricing/employers-pricing.component';
import { EmployersServicesComponent } from './component/employers/employers-services/employers-services.component';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { BlogInfoComponent } from './component/blog/blog-info/blog-info.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorporateComponent,
    ComingSoonComponent,
    AccountingComponent,
    JobsComponent,
    TestimonialsComponent,
    InfoComponent,
    SearchComponent,
    EmployersComponent,
    EmployersInfoComponent,
    EmployersPricingComponent,
    EmployersServicesComponent,
    AboutComponent,
    BlogComponent,
    BlogInfoComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMarqueeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

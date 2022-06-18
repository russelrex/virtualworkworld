import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CorporateComponent } from './component/corporate/corporate.component';
import { ComingSoonComponent } from './component/coming-soon/coming-soon.component';
import { AgmCoreModule } from '@agm/core';
import { MyAgmComponent } from './component/google-map/my-agm.component';
import { NgMarqueeModule } from 'ng-marquee';
import { AccountingComponent } from './component/jobs/accounting/accounting.component';
import { JobsComponent } from './component/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorporateComponent,
    ComingSoonComponent,
    MyAgmComponent,
    AccountingComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3ucf4jfPb6B18jcdHFkNDjZk99gZQOio'
    }),
    NgMarqueeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

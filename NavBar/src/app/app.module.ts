import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NominateComponent } from './pages/nominate/nominate.component';
import { TrailblazerComponent } from './pages/trailblazer/trailblazer.component';
import { StatsbarComponent } from './components/statsbar/statsbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    NominateComponent,
    TrailblazerComponent,
    StatsbarComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

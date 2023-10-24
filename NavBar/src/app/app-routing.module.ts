import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NominateComponent } from './pages/nominate/nominate.component';
import { TrailblazerComponent } from './pages/trailblazer/trailblazer.component';

const routes: Routes = [
   {path: "dashboard", component: DashboardComponent  },   
   { path: 'nominate', component: NominateComponent },
   { path: 'trailblaizer', component: TrailblazerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

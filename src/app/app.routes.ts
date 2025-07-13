import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { MinistryComponent } from './pages/ministry/ministry.component';
import { CauseComponent } from './pages/cause/cause.component';

export const routes: Routes = [
  { path: 'charity/:code', component: CauseComponent },
  { path: 'ministry/:code', component: MinistryComponent },
  { path: 'activity/:code', component: ActivityComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

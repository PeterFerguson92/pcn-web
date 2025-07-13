import { Component } from '@angular/core';
import { HomeBannerComponent } from '../../components/home-banner/home-banner.component';
import { HomeAboutComponent } from '../../components/home-about/home-about.component';
import { HomeMinistryComponent } from '../../components/home-ministry/home-ministry.component';
import { HomeCausesComponent } from '../../components/home-causes/home-causes.component';
import { HomeInfoComponent } from '../../components/home-info/home-info.component';
import { HomeBelieveComponent } from '../../components/home-believe/home-believe.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeBannerComponent,
    HomeAboutComponent,
    HomeMinistryComponent,
    HomeCausesComponent,
    HomeInfoComponent,
    HomeBelieveComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

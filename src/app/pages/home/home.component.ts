import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HomeBannerComponent } from "../../components/home-banner/home-banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HomeBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css',
})
export class HomeBannerComponent {
  bannerSlides = [
    {
      image: 'assets/extra-images/A1-home-banner.jpg',
      alt: 'Banner 1',
      date: 'June 10, 2017 @ 09:00 to 11:00 A.M',
      title: 'God Is Love',
    },
  ];
}

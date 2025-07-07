import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-info.component.html',
  styleUrl: './home-info.component.css'
})
export class HomeInfoComponent {
  testimonials = [
    {
      image: 'assets/extra-images/testimonial_img_01.png',
      name: 'Ryan Haris',
      text: 'Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus...'
    },
    {
      image: 'assets/extra-images/testimonial_img_01.png',
      name: 'Ryan Haris',
      text: 'Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus...'
    },
    {
      image: 'assets/extra-images/testimonial_img_01.png',
      name: 'Ryan Haris',
      text: 'Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus...'
    },
    {
      image: 'assets/extra-images/testimonial_img_01.png',
      name: 'Ryan Haris',
      text: 'Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus...'
    }
  ];
}

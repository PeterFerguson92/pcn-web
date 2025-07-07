import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-believe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-believe.component.html',
  styleUrl: './home-believe.component.css',
})
export class HomeBelieveComponent {
  images = [
    'assets/extra-images/testimonial_img_01.jpg',
    'assets/extra-images/testimonial_img_02.jpg',
    'assets/extra-images/testimonial_img_03.jpg',
    'assets/extra-images/testimonial_img_04.jpg',
    'assets/extra-images/testimonial_img_05.jpg',
    'assets/extra-images/testimonial_img_01.jpg',
    'assets/extra-images/testimonial_img_02.jpg',
    'assets/extra-images/testimonial_img_03.jpg',
  ];

  testimonials = [
    {
      message:
        'Suspendisse bibendum egestas tellus et rhoncus. Pellentesque et sodales magna...',
      author: 'Jay Sean',
    },
    {
      message:
        'Pellentesque laoreet urna ut erat mollis, eu maximus mauris ultrices...',
      author: 'Jay Sean',
    },
    {
      message: 'Curabitur quis tincidunt mauris, ac pretium ligula...',
      author: 'Jay Sean',
    },
    {
      message:
        'Aliquam quis arcu iaculis, aliquet ante quis, porttitor mauris...',
      author: 'Jay Sean',
    },
    {
      message: 'Proin dictum sodales nisi, nec lobortis enim bibendum id...',
      author: 'Jay Sean',
    },
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-info.component.html',
  styleUrl: './home-info.component.css',
})
export class HomeInfoComponent {
  testimonials = [
    {
      image: 'assets/extra-images/testimonial_img_01.png',
      text: 'The word of God will come alive in your spirits as you worship and serve with us. ',
    },
  ];
}

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
        '“But whenever anyone turns to the Lord, the veil is taken away. Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom. And we all, who with unveiled faces contemplate the Lord’s glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit”. (2 Corinthians 3:16-18)',
      author: 'Jay Sean',
    }
  ];
}

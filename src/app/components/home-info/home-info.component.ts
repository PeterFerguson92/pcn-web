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
      text: 'To raise generations of men and women who will come into their inheritance in Christ by teaching the word of God through the Spirit of Transformation so that they will fulfill God’s Vision for their lives and generation.',
    },
    {
      image: 'assets/extra-images/testimonial_img_01.png',
      text: 'Our vision is to take God’s divine presence to the peoples and the nations of the world and to demonstrate the character of the Holy Spirit.',
    },
    {
      image: 'assets/extra-images/testimonial_img_01.png',
      text: 'The word of God will come alive in your spirits as you worship and serve with us. ',
    },
    {
      image: 'assets/extra-images/testimonial_img_01.png',
      text: 'Grace and peace will be multiplied unto you through the knowledge of our Lord and Savior Jesus Christ.',
    },
  ];
}

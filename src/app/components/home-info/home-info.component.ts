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
      image: 'assets/images/A1-logo.jpg',
      text: 'The word of God will come alive in your spirits as you worship and serve with us. ',
    },
  ];
}

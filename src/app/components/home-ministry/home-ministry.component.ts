import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-ministry',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-ministry.component.html',
  styleUrl: './home-ministry.component.css',
})
export class HomeMinistryComponent {
  ministries = [
    {
      image: 'assets/extra-images/our_soft_col_img01.jpg',
      title: 'Bradford church',
      description:
        'Praesent eget metus ligula. In tempus fermentum dui. Praesent tempus velit facilisis...',
      link: '/ministries/children',
    },
    {
      image: 'assets/extra-images/our_soft_col_img02.jpg',
      title: 'MILTON KEYNES PRAYER CLINIC',
      description:
        'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et...',
      link: '/ministries/youth',
    },
    {
      image: 'assets/extra-images/our_soft_col_img03.jpg',
      title: 'Intercession Ministry',
      description:
        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa...',
      link: '/ministries/worship',
    },
  ];
}

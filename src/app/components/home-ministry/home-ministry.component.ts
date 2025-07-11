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
        'oin us every Sunday in Bradford for a time of vibrant worship, uplifting teaching, and meaningful community. All are welcome!',
      link: '/ministry/1',
    },
    {
      image: 'assets/extra-images/our_soft_col_img02.jpg',
      title: 'MILTON KEYNES PRAYER CLUB',
      description:
        'Gather with us monthly in Milton Keynes for a powerful time of prayer, worship, and intercession. All are welcome to stand in the gap!',
      link: '/ministry/2',
    },
    {
      image: 'assets/extra-images/our_soft_col_img03.jpg',
      title: 'GATE KEEPERS - INTERCESSION',
      description:
        'Join the Gatekeepers online as we intercede for the church, nations, and communities — standing watch in prayer and unity',
      link: '/ministry/3',
    },
  ];
}

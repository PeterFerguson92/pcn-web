import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-causes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-causes.component.html',
  styleUrl: './home-causes.component.css',
})
export class HomeCausesComponent {
  causes = [
    {
      image: 'assets/images/A1-support.jpg',
      title: 'Support the ministry',
      tagline: 'In God, Hope',
      description:
        'Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros...',
      link: '',
      route: '/charity/1',
    },
    {
      image: 'assets/images/A1-charity2.jpg',
      title: 'Food For All',
      tagline: 'Faith in Action',
      description:
        'Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor...',
      link: '',
      route: '/charity/2',
    },
    {
      image: 'assets/images/A1-charity3.jpg',
      title: 'Build a Church',
      tagline: 'In God, Strength',
      description:
        'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi...',
      link: '',
      route: '/charity/3',
    },
  ];
}

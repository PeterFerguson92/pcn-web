import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  images = [
    'ft_church_images_01.jpg',
    'ft_church_images_02.jpg',
    'ft_church_images_03.jpg',
    'ft_church_images_04.jpg',
    'ft_church_images_05.jpg',
    'ft_church_images_06.jpg',
  ];
}

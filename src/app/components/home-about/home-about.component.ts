import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.css',
})
export class HomeAboutComponent {
  services = [
    { icon: 'icon-building', title: 'Morning Devotion' },
    { icon: 'icon-building', title: 'Wednesday Bible Study' },
    { icon: 'icon-silhouette', title: 'Saturday Intercession Prayers' },
    { icon: 'icon-christmas', title: 'Sunday Fellowship' },
  ];
}

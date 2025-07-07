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
    { icon: 'icon-building', title: 'Daily Prayer' },
    { icon: 'icon-building', title: 'Daily Prayer' },
    { icon: 'icon-silhouette', title: 'Daily Prayer' },
    { icon: 'icon-christmas', title: 'Daily Prayer' },
  ];
}

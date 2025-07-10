import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.css',
})
export class HomeAboutComponent {
  services = [
    { icon: 'icon-building', title: 'Morning Devotion' , path: "/activity/1"},
    { icon: 'icon-book', title: 'Wednesday Bible Study', path: "/activity/2" },
    { icon: 'icon-silhouette', title: 'Saturday Intercession', path: "/activity/3" },
    { icon: 'icon-christmas', title: 'Sunday Fellowship', path: "/activity/4" },
  ];
}

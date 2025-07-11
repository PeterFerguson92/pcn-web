import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-ministry-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ministry-content.component.html',
  styleUrl: './ministry-content.component.css',
})
export class MinistryContentComponent {
  code: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.code = '';
    router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        const codeFromRoute = this.route.snapshot.paramMap.get('code');
        if (codeFromRoute) {
          console.log('Code from route:', codeFromRoute);
          this.code = codeFromRoute;
        } else {
          console.warn('No code found in route parameters.');
        }
      }
    });
  }
}

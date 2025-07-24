import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-activity-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-content.component.html',
  styleUrl: './activity-content.component.css',
})
export class ActivityContentComponent {
  code!: string;
  zoomLink =
    'https://us02web.zoom.us/j/7278238487?pwd=c2grWmM3dm1iYVZ0NWhyQk1SR1NTdz09';

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        const codeFromRoute = this.route.snapshot.paramMap.get('code');
        if (codeFromRoute) {
          this.code = codeFromRoute;
        } else {
          console.warn('No code found in route parameters.');
        }
      }
    });
  }
}

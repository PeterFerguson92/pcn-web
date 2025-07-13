import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cause-content',
  standalone: true,
  imports: [],
  templateUrl: './cause-content.component.html',
  styleUrl: './cause-content.component.css',
})
export class CauseContentComponent implements OnInit {
  code!: string;
  charityImage: string = 'assets/images/A1-charity.jpg';
  charityName: string = 'PCN Charity';
  charityDescription: string =
    'PCN Charity is a non-profit organization dedicated to making a positive impact in the community through various charitable initiatives. Our mission is to support those in need and promote social welfare.';
  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        const codeFromRoute = this.route.snapshot.paramMap.get('code');
        if (codeFromRoute) {
          console.log('Code from route:', codeFromRoute);
          this.code = codeFromRoute;
          this.setCharityDetails()
        } else {
          console.warn('No code found in route parameters.');
        }
      }
    });
  }

  ngOnInit(): void {
    this.setCharityDetails();
  }

  private setCharityDetails() {
    switch (this.code)
    {
      case '1':
        this.charityImage = 'assets/images/A1-charity.jpg';
        this.charityName = 'PCN Charity 1';
        this.charityDescription =
          'PCN Charity 1 is dedicated to providing educational resources to underprivileged children in the community. We believe that every child deserves access to quality education and opportunities for a brighter future.';
        break;
      case '2':
        this.charityImage = 'assets/images/A1-charity2.jpg';
        this.charityName = 'PCN Charity 2';
        this.charityDescription =
          'PCN Charity 2 focuses on environmental conservation and sustainability. We work towards protecting natural habitats, promoting recycling, and raising awareness about climate change.';
        break;
      case '3':
        this.charityImage = 'assets/images/A1-charity3.jpg';
        this.charityName = 'PCN Charity 3';
        this.charityDescription =
          'PCN Charity 3 aims to provide healthcare services to underserved communities. We strive to ensure that everyone has access to essential medical care and support for a healthier life.';
        break;
      default:
        this.charityImage = 'assets/images/A1-charity.jpg';
        this.charityName = 'PCN Charity';
        this.charityDescription =
          'PCN Charity is a non-profit organization dedicated to making a positive impact in the community through various charitable initiatives. Our mission is to support those in need and promote social welfare.';
        break;
    }
  }
}

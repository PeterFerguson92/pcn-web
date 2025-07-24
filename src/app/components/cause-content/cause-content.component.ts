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
          this.code = codeFromRoute;
          this.setCharityDetails();
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
    switch (this.code) {
      case '1':
        this.charityImage = 'assets/images/A1-support.jpg';
        this.charityName = 'Support the ministry';
        this.charityDescription = `Your generous gift helps us share the message of hope, faith, and love with people around the world. Every donation directly supports our outreach, discipleship, and community programs. Whether it's a one-time gift or send us an email at thepotterstouch@gmail.com to become our financial partner and provide continuous support to help sustain and grow the ministry’s impact.`;
        break;
      case '2':
        this.charityImage = 'assets/images/A1-charity2.jpg';
        this.charityName = 'Food for all';
        this.charityDescription = `PCN charity food program focuses on providing food packages to underprivileged individuals and families. Through your support, we bring hope and nourishment to those who need it most.
        <br><br>“Feed the hungry, and help those in trouble. Then your light will shine out from the darkness, and the darkness around you will be as bright as noon.”
— Isaiah 58: 10 NLT`;
        break;
      case '3':
        this.charityImage = 'assets/images/A1-charity3.jpg';
        this.charityName = 'Healthcare for all';
        this.charityDescription =
          'PCN  aims to provide healthcare services to underserved communities. We strive to ensure that everyone has access to essential medical care and support for a healthier life.';
        break;
      default:
        this.charityImage = 'assets/images/A1-charity.jpg';
        this.charityName = 'PCN Charity';
        this.charityDescription =
          'PCN Charity is a non-profit organization dedicated to making a positive impact in the community through various charitable initiatives. Our mission is to support those in need and promote social welfare.';
        break;
    }
  }

  donate() {
    window.location.href = 'https://buy.stripe.com/bJecN6fea37kf0JgedgA800'; // Replace with your Payment Link
  }
}

import { Component } from '@angular/core';
import { AboutUsContentComponent } from '../../components/about-us-content/about-us-content.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutUsContentComponent, GalleryComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  description: string =
    "Explore moments of worship, fellowship, and community life at Potter's Community Network.";
  images: string[] = [
    'assets/images/A1-aboutus4.JPG',
    'assets/images/A1-aboutus2.JPG',
    'assets/images/A1-aboutus7.jpg',
    'assets/images/A1-aboutus5.JPG',
  ];
}

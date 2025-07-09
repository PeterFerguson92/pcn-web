import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutUsContentComponent } from '../../components/about-us-content/about-us-content.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AboutUsContentComponent ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}

import { Component } from '@angular/core';
import { ContactUsContentComponent } from '../../components/contact-us-content/contact-us-content.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactUsContentComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}

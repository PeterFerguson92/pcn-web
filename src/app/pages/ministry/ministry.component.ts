import { Component } from '@angular/core';
import { MinistryContentComponent } from '../../components/ministry-content/ministry-content.component';

@Component({
  selector: 'app-ministry',
  standalone: true,
  imports: [MinistryContentComponent],
  templateUrl: './ministry.component.html',
  styleUrl: './ministry.component.css'
})
export class MinistryComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CauseContentComponent } from '../../components/cause-content/cause-content.component';

@Component({
  selector: 'app-cause',
  standalone: true,
  imports: [CommonModule, CauseContentComponent],
  templateUrl: './cause.component.html',
  styleUrl: './cause.component.css',
})
export class CauseComponent{

}

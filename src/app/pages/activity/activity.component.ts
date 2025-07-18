import { Component, OnInit } from '@angular/core';
import { ActivityContentComponent } from '../../components/activity-content/activity-content.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [ActivityContentComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css',
})
export class ActivityComponent {}

import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-content.component.html',
  styleUrl: './activity-content.component.css',
})
export class ActivityContentComponent implements OnInit, OnChanges {
  code?: string;
  zoomLink =
    'https://us02web.zoom.us/j/7278238487?pwd=c2grWmM3dm1iYVZ0NWhyQk1SR1NTdz09';

  constructor(private route: ActivatedRoute) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code'] && !changes['code'].isFirstChange()) {
      console.log('Code changed:', changes['code'].currentValue);
      this.code = changes['code'].currentValue;
    }
  }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('code') as string;
    if (this.code) {
      console.log('Activity code initialized:', this.code);
    } else {
      console.warn('No activity code found in route parameters.');
    }
  }
}



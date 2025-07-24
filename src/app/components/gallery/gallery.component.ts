import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnChanges {
  @Input() description!: string;
  @Input() images!: string[];


  ngOnChanges(changes: SimpleChanges): void {
    this.images = changes['images']?.currentValue || [];
    this.description = changes['description']?.currentValue || '';
  }



}

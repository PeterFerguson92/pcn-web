import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-message.component.html',
  styleUrl: './notification-message.component.css',
})
export class NotificationMessageComponent {
  @Input() showText: boolean = false;
  @Input() text!: string;
  @Input() color!: string;
}

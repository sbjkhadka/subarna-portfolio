import { Component, Input } from '@angular/core';
import { fade } from '../animations';
import { HeaderText } from '../Models/header-text.interface';
import { Social } from '../Models/social.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fade]
})
export class HeaderComponent {

  @Input() socials: Social[];
  @Input() headerText: HeaderText;

  constructor() { }

  timeOfDay(): string {
    const hour = Number(new Date().getHours());
    if (hour >= 4 && hour <= 11) {
      return 'Morning';
    } else if (hour >= 12 && hour <= 16) {
      return 'Afternoon';
    } else if (hour >= 17 && hour <= 21) {
      return 'Evening';
    } else {
      return 'Night';
    }
  }

}

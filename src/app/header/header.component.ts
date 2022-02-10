import { Component, Input, OnInit } from '@angular/core';
import { Social } from '../Models/social.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() social: Social = {};
  constructor() { }

  timeOfDay(): string {
    const hour = Number(new Date().getHours());
    if(hour >= 4 && hour <= 11) {
      return 'Morning';
    } else if (hour >= 12 && hour <=16) {
      return 'Day';
    } else if (hour >= 17 && hour <=21) {
      return 'Evening';
    } else {
      return 'Night';
    }
  }

}

import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { fade } from '../animations';
import { HeaderText } from '../Models/header-text.interface';
import { Social } from '../Models/social.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fade]
})
export class HeaderComponent implements OnInit {

  @Input() socials: Social[];
  @Input() headerText: HeaderText;
  @Input() coverImage: string;

  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
    this.setCoverBackGround();
  }

  private setCoverBackGround(): void {
    this.elementRef.nativeElement.querySelector('section.banner').setAttribute('style', "background-image: url(" + this.coverImage + ")")
  }

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

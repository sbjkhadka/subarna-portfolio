import { Component, Input, OnInit } from '@angular/core';
import { Social } from 'src/app/Models/social.interface';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent implements OnInit {

  @Input() link: Social;
  @Input() section: string;
  constructor() { }

  ngOnInit() {
  }

  getClasses(): string {
    if(this.section === 'header') {
      return 'text-light';
    } else if(this.section === 'footer') {
      return 'text-muted';
    } else {
      return '';
    }
  }

}

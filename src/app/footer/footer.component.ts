import { Component, Input, OnInit } from '@angular/core';
import { Social } from '../Models/social.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() social: Social = {};
  year = new Date().getFullYear();
  name = 'Subarna';
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { Social } from './Models/social.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'subarna-portfolio';
  socialIds: Social= {
    github: 'https://github.com/sbjkhadka',
    linkedIn: 'https://www.linkedin.com/in/subarnabkhadka',
    instagram: 'https://www.instagram.com/subarnabj',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://www.twitter.com/'
  };
}

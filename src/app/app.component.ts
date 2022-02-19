import { Component } from '@angular/core';
import { Social } from './Models/social.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'subarna-portfolio';
  socialIds: Social[] = [
    { name: 'github', link: 'https://github.com/sbjkhadka', icon: 'fa-github-square' },
    { name: 'linkedIn', link: 'https://www.linkedin.com/in/subarnabkhadka', icon: 'fa-linkedin-square' },
    { name: 'instagram', link: 'https://www.instagram.com/subarnabj', icon: 'fa-instagram' },
    { name: 'facebook', link: 'https://www.facebook.com/', icon: 'fa-facebook-square' },
    { name: 'twitter', link: 'https://www.twitter.com/', icon: 'fa-twitter-square' }
  ];
}

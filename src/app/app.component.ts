import { Component } from '@angular/core';
import { ContactDetail } from './Models/contact-details.interface';
import { HeaderText } from './Models/header-text.interface';
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

  contactDetails: ContactDetail = {
    name: 'Subarna B Khadka',
    city: 'Toronto',
    province: 'Ontario',
    postalCode: 'M1M 1T2',
    phone: '647-914-7091',
    email: 'khadka.subarnabijaya@gmail.com'
  }
  headerText: HeaderText = {
    greeting: 'hello world',
    tagline: 'A Toronto based Full Stack Dev'
  };
}

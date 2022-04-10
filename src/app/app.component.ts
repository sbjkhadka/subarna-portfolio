import { Component } from '@angular/core';
import { AboutText } from './Models/about-text.interface';
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

  aboutTexts: AboutText[] = [
    {
      language: 'english',
      salutations: ['Hello', 'Hola', 'Namaste', 'Salaam', 'nǐ hǎo', 'Annyeong Haseyo!'],
      texts: [
        'I am a Toronto Based Full Stack developer focussing on MEAN stack and keen on MERN stack and Spring framework.I have 1+ years of experience working as a frontend developer in different projects of Xello and Alpha.',
        'I am an amateur chef, a husband, and a dog lover. I love to go on a long walk whenever possible.',
        'I am a recent graduate of Software Engineering from Centennial College. Currently, I am enjoying my most awaited break from my College life and looking forward to working in a reputed company as a Full Stack Developer or a Front end Developer.'
      ]
    }, {
      language: 'french',
      salutations: ['Bonjour'],
      texts: [
        "Je suis un développeur Full Stack basé à Toronto qui se concentre sur la pile MEAN et qui aime la pile MERN et le framework Spring. J'ai plus d'un an d'expérience en tant que développeur frontend dans différents projets de Xello et Alpha.",
        "Je suis un chef amateur, un mari et un amoureux des chiens. J'aime faire de longues promenades dès que possible.",
        "Je suis un récent diplômé en génie logiciel du Centennial College. Actuellement, je profite de ma pause la plus attendue de ma vie universitaire et j'ai hâte de travailler dans une entreprise réputée en tant que développeur Full Stack ou développeur front-end."
      ]
    }
  ];

  // Replace with s3 link later
  profileImage: string = "../../assets/images/profile.jpg";
  coverImage: string = "../../assets/images/my_cover.jpg";

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects = [
    {
      link: 'https://angular-common-patterns.herokuapp.com/booking',
      language: 'Angular',
      description: 'Ticket Selector',
      src: '../../assets/images/projects/ticket_selector.png',
      github: 'https://github.com/sbjkhadka/Angular-patterns-for-common-tasks/tree/master/src/app/seat-booking'
    },
    {
      link: 'https://subarna-portfolio.herokuapp.com',
      language: 'Angular',
      description: 'Portfolio',
      src: '../../assets/images/projects/portfolio.png',
      github: 'https://github.com/sbjkhadka/subarna-portfolio'
    },
    {
      link: '',
      language: 'Angular',
      description: 'Grocery List Generator',
      src: '../../assets/images/projects/grocery.png',
      github: 'https://github.com/sbjkhadka/COMP-Two-Three-One-Frontend'
    },
    {
      link: 'https://angular-common-patterns.herokuapp.com/combine-latest',
      language: 'Angular',
      description: 'RxJS E-Commerce Filter',
      src: '../../assets/images/projects/ecommerce.png',
      github: 'https://github.com/sbjkhadka/Angular-patterns-for-common-tasks/tree/master/src/app/rxjs-combine-latest'
    },
    {
      link: 'https://angular-common-patterns.herokuapp.com/inline-editing',
      language: 'Angular',
      description: 'Table Inline Editing',
      src: '../../assets/images/projects/common.png',
      github: 'https://github.com/sbjkhadka/Angular-patterns-for-common-tasks/tree/master/src/app/inline-editing'
    },
    {
      link: '',
      language: 'React',
      description: 'Nurse',
      src: '../../assets/images/projects/nurses.jpeg',
      github: 'https://github.com/sbjkhadka/Group1COMP308Project'
    },
    {
      link: 'https://sbjkhadka.github.io/JQuery-Live-Search/',
      language: 'JQuery',
      description: 'Search within text',
      src: '../../assets/images/projects/live_search.png',
      github: 'https://github.com/sbjkhadka/JQuery-Live-Search'
    },
    {
      link: 'https://sbjkhadka.github.io/cencol_css_first/',
      language: 'HTML/CSS',
      description: 'First Semester Project',
      src: '../../assets/images/projects/realtor.png',
      github: 'https://github.com/sbjkhadka/cencol_css_first'
    },
  ];
  constructor() { }

}

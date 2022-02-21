import { Component, OnInit } from '@angular/core';

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
      src: '../../assets/images/projects/ticket_selector.png'
    },
    {
      link: 'https://github.com/sbjkhadka/subarna-portfolio',
      language: 'Angular',
      description: 'Portfolio',
      src: '../../assets/images/projects/portfolio.png'
    },
    {
      link: 'https://github.com/sbjkhadka/COMP-Two-Three-One-Frontend',
      language: 'Angular',
      description: 'Grocery List Generator',
      src: '../../assets/images/projects/grocery.png'
    },
    {
      link: 'https://angular-common-patterns.herokuapp.com/combine-latest',
      language: 'Angular',
      description: 'RxJS E-Commerce Filter',
      src: '../../assets/images/projects/ecommerce.png'
    },
    {
      link: 'https://angular-common-patterns.herokuapp.com/inline-editing',
      language: 'Angular',
      description: 'Table Inline Editing',
      src: '../../assets/images/projects/common.png'
    },
    {
      link: 'https://github.com/sbjkhadka/Group1COMP308Project',
      language: 'React',
      description: 'Nurse',
      src: '../../assets/images/projects/nurses.jpeg'
    },
    {
      link: 'https://github.com/sbjkhadka/JQuery-Live-Search',
      language: 'JQuery',
      description: 'Search within text',
      src: '../../assets/images/projects/live_search.png'
    },
    {
      link: 'https://sbjkhadka.github.io/cencol_css_first/',
      language: 'HTML/CSS',
      description: 'First Semester Project',
      src: '../../assets/images/projects/realtor.png'
    },
    ];
  constructor() { }

}

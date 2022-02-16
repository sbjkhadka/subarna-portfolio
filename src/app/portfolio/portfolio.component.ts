import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects = [
    { link: 'https://github.com/sbjkhadka/COMP-Two-Three-One-Frontend', language: 'Angular', description: 'Grocery List Generator', src: '../../assets/images/projects/grocery.png' },
    { link: 'https://github.com/sbjkhadka/JQuery-Live-Search', language: 'JQuery', description: 'Search within text', src: '../../assets/images/projects/live_search.png' },
    { link: 'https://github.com/sbjkhadka/subarna-portfolio', language: 'Angular', description: 'Portfolio', src: '../../assets/images/projects/portfolio.png' },
    { link: 'https://github.com/sbjkhadka/Group1COMP308Project', language: 'React', description: 'Nurse', src: '../../assets/images/projects/nurses.jpeg' },
    { link: 'https://sbjkhadka.github.io/cencol_css_first/', language: 'HTML/CSS', description: 'First Semester Project', src: '../../assets/images/projects/realtor.png' },
    { link: 'https://angular-common-patterns.herokuapp.com/', language: 'Angular', description: 'Angular Common Patterns', src: '../../assets/images/projects/common.png' },
    ];
  constructor() { }

  ngOnInit() {
  }

}

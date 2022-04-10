import { Component, Input } from '@angular/core';
import { Project } from '../Models/project.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  @Input() projects: Project[];

}

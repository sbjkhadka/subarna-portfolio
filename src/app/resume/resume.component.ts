import { Component, Input } from '@angular/core';
import { SkillLevel } from '../Models/skill-levels.interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  @Input() techStacks: string[];
  @Input() skillLevels: SkillLevel[];

}

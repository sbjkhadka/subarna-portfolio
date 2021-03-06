import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SkillLevel } from 'src/app/Models/skill-levels.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D;
  @Input() skill: SkillLevel;
  @ViewChild('techName', { static: true }) techName: ElementRef;

  constructor() { }

  ngOnInit() {
    this.context = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.createCanvas();
  }

  private createCanvas(): void {

    // Base circle
    this.context.beginPath()
    this.context.arc(100, 100, 70, 0, 2 * Math.PI);
    this.context.lineWidth = 1;
    this.context.strokeStyle = this.skill.color;
    this.context.stroke();

    // Inner text
    this.context.beginPath();
    this.context.font = 'bold 30px Arial';
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';
    this.context.fillStyle = this.skill.color;
    this.context.fillText(`${this.skill.value.toString()}%`, this.canvas.nativeElement.width / 2, this.canvas.nativeElement.height / 2);
    this.context.stroke();

    // progress circle
    this.context.beginPath();
    this.context.arc(100, 100, 70, 0, (this.skill.value / 100) * 2 * Math.PI);
    this.context.lineWidth = 20;
    this.context.strokeStyle = this.skill.color;
    this.context.stroke();

    // Tech Name
    this.techName.nativeElement.style.color = this.skill.color;
  }

}

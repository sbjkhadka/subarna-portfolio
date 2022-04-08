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

  constructor() { }

  ngOnInit() {
    this.createCanvas();
  }

  private createCanvas(): void {
    this.context = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    // Base circle
    this.context.beginPath()
    this.context.arc(100, 100, 70, 0, 2 * Math.PI);
    this.context.lineWidth = 20;
    this.context.strokeStyle = '#898492';
    this.context.stroke();


    // progress circle
    this.context.beginPath()
    this.context.arc(100, 100, 70, 0, (this.skill.value / 100) * 2 * Math.PI);
    this.context.lineWidth = 20;
    this.context.strokeStyle = '#12002F';
    this.context.stroke();

    // Inner text
    this.context.beginPath();
    this.context.font = 'bold 30px Arial';
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';
    this.context.fillStyle = '#12002F';
    this.context.fillText(`${this.skill.value.toString()}%`, this.canvas.nativeElement.width / 2, this.canvas.nativeElement.height / 2);
    this.context.stroke();
  }

}

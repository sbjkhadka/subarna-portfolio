import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.scss']
})
export class MyProjectComponent implements OnInit {

  @Input() project: any;
  constructor() { }

  ngOnInit() {
  }

}

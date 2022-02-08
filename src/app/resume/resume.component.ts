import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  techStacks = [
    'https://angular.io/assets/images/logos/angular/angular.png',
    'https://us.123rf.com/450wm/innayatsuk/innayatsuk2102/innayatsuk210200051/165304530-orange-3d-html5-icon-isolated-on-white-background-.jpg?ver=6',
    'data:image/png;base64,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',
    'https://brandlogos.net/wp-content/uploads/2016/06/bootstrap-logo-vector-download.jpg',
    'https://pbs.twimg.com/profile_images/1473756532827246593/KRgw2UkV_400x400.jpg',
    'https://blogs.incyclesoftware.com/hubfs/Git%20Logo.jpg',
    'https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png',
    'https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png',
    'https://miro.medium.com/max/1000/1*TGwJKcxY8kGEenRLLedeLw.png',
    'https://simg.nicepng.com/png/small/223-2233246_heroku-logo-salesforce-heroku.png',
    'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png'];

    skillLevels = [
      { skill: 'Angular', value: '90' },
      { skill: 'React', value: '80' },
      { skill: 'Node', value: '80' },
      { skill: 'SQL', value: '90' },
      { skill: 'Spring', value: '70' },
    ];
  constructor() { }

  ngOnInit() {
  }

}

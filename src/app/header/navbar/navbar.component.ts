import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  scrolling = false;
  
  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:scroll')
  scrollFunction() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.scrolling = true;
    } else {
      this.scrolling = false;
    }
  }

}

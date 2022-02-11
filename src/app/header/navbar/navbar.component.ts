import { Component, HostListener, OnInit } from '@angular/core';
import { fade } from 'src/app/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [ fade ]
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
    // Fix for about not working after returning back after scroll to about
    // 1. Click down arrow(to navigate to about)
    // 2. Scroll to top of the page
    // 3. Click on about it won't work, but it will work after introducing this condition
    if (window.pageYOffset === 0) {
      window.location.hash = '';
    }
  }
}

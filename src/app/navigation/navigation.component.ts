import { Component, OnInit, HostListener, Input } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { scroll } from 'src/app/helpers/functions';
import { Pages } from 'src/app/constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() page: string = '';
  Pages = Pages;

  faBars = faBars;
  faTimes = faTimes;
  menuOpened = true;
  scroll = scroll;

  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth < 768) {
      this.menuOpened = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 768) {
      this.menuOpened = true;
    } else {
      this.menuOpened = false;
    }
  }

  scrollTo(el: string) {
    scroll(el);
    if (window.innerWidth < 768) {
      this.menuOpened = false;
    }
  }
}


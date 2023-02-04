import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Pages } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Liam Sharpe';
  page: string = Pages.dev;

  constructor(private router: Router, private titleService: Title) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        if (route.url === '/dev') {
          this.page = Pages.dev;
          this.titleService.setTitle('Liam Sharpe | Web Developer');
        } else if (route.url === '/circus') {
          this.page = Pages.circus;
          this.titleService.setTitle('Liam Sharpe | Circus');
        }
      }
    });
  }
}

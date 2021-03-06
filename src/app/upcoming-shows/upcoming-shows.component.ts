import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UpcomingShow {
  title: string;
  date: string;
  ticket_url: string | null;
}

@Component({
  selector: 'app-upcoming-shows',
  templateUrl: './upcoming-shows.component.html',
  styleUrls: ['./upcoming-shows.component.scss'],
})
export class UpcomingShowsComponent implements OnInit {
  upcomingShows: any[] = [];
  showLimit = 3;
  currentLimit = this.showLimit;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const todaysDate = new Date();
    this.http
      .get<UpcomingShow[]>('assets/json/upcoming-shows.json')
      .subscribe((shows) => {
        shows.forEach((show) => {
          const date = new Date(show.date);
          if (date.getTime() >= todaysDate.getTime()) {
            this.upcomingShows.push(show);
          }
        });
      });
  }

  toggleShowMoreLess() {
    this.currentLimit =
      this.upcomingShows.length === this.currentLimit
        ? this.showLimit
        : this.upcomingShows.length;
  }
}

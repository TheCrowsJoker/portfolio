import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UpcomingShow {
  title: string;
  date: string;
  ticket_url: string | null;
}

@Component({
  selector: 'app-circus-upcoming-shows',
  templateUrl: './circus-upcoming-shows.component.html',
  styleUrls: ['./circus-upcoming-shows.component.scss'],
})
export class CircusUpcomingShowsComponent implements OnInit {
  upcomingShows: any[] = [];
  pastShows: any[] = [];

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
          } else {
            this.pastShows.push(show);
          }
        });
        this.pastShows.sort();
        this.pastShows.sort().reverse();
      });
  }
}


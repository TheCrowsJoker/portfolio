import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { faAngular, faSass } from '@fortawesome/free-brands-svg-icons';
import { faMobile, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dev-tech',
  templateUrl: './dev-tech.component.html',
  styleUrls: ['./dev-tech.component.scss'],
})
export class DevTechComponent implements OnInit {
  faAngular = faAngular;
  faSass = faSass;
  faMobile = faMobile;
  faCode = faCode;

  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}

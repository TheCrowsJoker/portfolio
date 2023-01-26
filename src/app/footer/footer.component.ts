import { Component, OnInit } from '@angular/core';
import { faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faEnvelope = faEnvelope;
  faCopyright = faCopyright;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}


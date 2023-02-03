import { Component, OnInit } from '@angular/core';
import { faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-circus-footer',
  templateUrl: './circus-footer.component.html',
  styleUrls: ['./circus-footer.component.scss']
})
export class CircusFooterComponent implements OnInit {
  faEnvelope = faEnvelope;
  faCopyright = faCopyright;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}


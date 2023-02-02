import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-dev-about',
  templateUrl: './dev-about.component.html',
  styleUrls: ['./dev-about.component.scss']
})
export class DevAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}

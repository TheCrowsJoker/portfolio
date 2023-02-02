import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-dev-work',
  templateUrl: './dev-work.component.html',
  styleUrls: ['./dev-work.component.scss']
})
export class DevWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}

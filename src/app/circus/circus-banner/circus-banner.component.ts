import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { scroll } from 'src/app/helpers/functions';

@Component({
  selector: 'app-circus-banner',
  templateUrl: './circus-banner.component.html',
  styleUrls: ['./circus-banner.component.scss'],
})
export class CircusBannerComponent implements OnInit {
  faChevronDown = faChevronDown;
  scroll = scroll;

  constructor() {}

  ngOnInit(): void {}
}

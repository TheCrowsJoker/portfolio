import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { scroll } from 'src/app/helpers/functions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  faChevronDown = faChevronDown;
  scroll = scroll;

  constructor() {}

  ngOnInit(): void {}
}

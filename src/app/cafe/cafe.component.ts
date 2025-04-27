import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css'],
  standalone: false
})
export class CafeComponent implements OnInit {
  cafes: Array<Cafe> = []
  constructor() { }

  ngOnInit() {
  }

}

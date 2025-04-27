import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css'],
  standalone: false
})
export class CafeComponent implements OnInit {
  cafes: Array<Cafe> = []
  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.getCafes();
      }
  
  getCafes() {
    this.cafeService.getCafes().subscribe(cafes => {
        this.cafes = cafes;
      });
    }
}
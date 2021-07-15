import { Component, Input, OnInit } from '@angular/core';
import { Driver } from '../models/driver';

@Component({
  selector: 'driver-cards',
  templateUrl: './driver-cards.component.html',
  styleUrls: ['./driver-cards.component.scss']
})
export class DriverCardsComponent implements OnInit {

  @Input()
  drivers: Array<Driver>;

  constructor() { }

  ngOnInit(): void {
  }
}

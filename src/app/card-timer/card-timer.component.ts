import { Component, Input, OnInit } from '@angular/core';
import { carPark } from './../models/car-park';

@Component({
  selector: 'card-timer',
  templateUrl: './card-timer.component.html',
  styleUrls: ['./card-timer.component.scss']
})
export class CardTimerComponent implements OnInit {
  @Input()
  time: number;

  @Input()
  carParkType: carPark;

  getTimeDiff(): Date {
      const latestDate = new Date();
      const date = latestDate.getDate();
      const month = latestDate.getMonth();
      const year = latestDate.getFullYear();

      console.log((new Date().valueOf() - new Date(this.time).valueOf()));
      console.log('this time...', new Date(year, month, date, this.time));
      console.log('latest...', new Date());
      console.log('difference: ', Math.floor((new Date().valueOf() - new Date(this.time).valueOf()) / 6000));
      return new Date(new Date().valueOf() - new Date(this.time).valueOf());
  }

  ngOnInit() {
    this.getTimeDiff();
    // Get current time
    // get the time parked
    // Get the difference
    // Initiate a counter on card
  }
}

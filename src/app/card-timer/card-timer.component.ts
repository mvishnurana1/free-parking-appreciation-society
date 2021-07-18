import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Driver } from '../models/driver';

@Component({
  selector: 'card-timer',
  templateUrl: './card-timer.component.html',
  styleUrls: ['./card-timer.component.scss']
})
export class CardTimerComponent implements OnInit {

  @Input()
  driver: Driver;

  timer: number;
  remainingTime: number;
  time: number;

  getTimeDifference(): number {
      const latestDate = new Date();
      const date = latestDate.getDate();
      const month = latestDate.getMonth();
      const year = latestDate.getFullYear();

      return Math.floor(((Date.now().valueOf() - new Date(year, month, date, this.driver.hour, this.driver.minute).valueOf()) / 1000) / 60);
  }

  totalTime(): number {

    switch(this.driver.carParkType) {
      case '1P':
        return 60;

      case '2P':
        return 120;

      case '3P':
        return 180;

      case '4P':
        return 240;

      default:
        return -1;
    }
  }

  newTimer(): void {
    const difference = this.getTimeDifference();
    const total = this.totalTime();

    if (total !== -1) {
      this.remainingTime = total - difference;

      const source = interval(1000);

      const subscribe = source.subscribe({
        next: (val) => {
          this.time = val;
        }
      })
    }
  }

  ngOnInit() {
    this.newTimer();
  }
}

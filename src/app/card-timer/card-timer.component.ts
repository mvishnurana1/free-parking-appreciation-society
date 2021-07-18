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
  completedMinutes: number = 0;
  completedHours: number = 0;
  remainingHour: number;
  remainingMinutes: number;
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

  timeConvert(remainingTime: number): void {
    const hours = (remainingTime / 60);
    this.remainingHour = Math.floor(hours);
    const minutes = (hours - this.remainingHour) * 60;
    this.remainingMinutes = Math.round(minutes);
  }

  newTimer(): void {
    const difference = this.getTimeDifference();
    const total = this.totalTime();

    if (total !== -1) {
      const remainingTime = total - difference;
      this.timeConvert(remainingTime);

      const source = interval(1000);

      source.subscribe({
        next: (val) => {
          if ((val > 0) && (val % 60 === 0)) {
            this.completedMinutes = this.completedMinutes + 1;
            this.remainingMinutes = this.remainingMinutes - 1;

            if ((this.completedMinutes >= 60) && (this.completedMinutes % 60 === 0)) {
              this.completedHours = this.completedHours + 1;
              this.remainingHour = this.remainingHour - 1;
            }
          }
          this.time = val;
        }
      })
    }
  }

  ngOnInit() {
    this.newTimer();
  }
}

import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { differenceInMinutes } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  constructor(
    private readonly datePipe: DatePipe
  ) { }

  transFormShort(date: Date): string {
    return this.datePipe.transform(date, 'h:mm a');
  }

  timeDifferenceInMinutes(latestTime, olderDate) {
    return differenceInMinutes(latestTime, olderDate);
  }

  calculateTimeRemaining(): void {

  }
}

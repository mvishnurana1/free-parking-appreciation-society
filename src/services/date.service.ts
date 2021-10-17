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

  timeDifferenceInMinutes(latestTime, olderDate): number {
    return differenceInMinutes(latestTime, olderDate);
  }

  dateParse(timeParked: string): Date {
    const newArray = timeParked.split(":");

    const hourSegment = Number(newArray[0]);
    const minuteSegment = newArray[1];

    const timeSplit = minuteSegment.split(" ");

    const today = new Date();

    let numberHour: number;

    if (timeSplit[1] === 'PM' && (hourSegment >= 1 && hourSegment <= 11)) {
      numberHour = hourSegment + 12;
    } else {
      numberHour = hourSegment;
    }

    const dateTimeParked = new Date(today.getFullYear(), today.getMonth(), today.getDate(), numberHour, Number(timeSplit[0]));

    return dateTimeParked;
  }
}

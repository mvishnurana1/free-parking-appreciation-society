import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

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
}

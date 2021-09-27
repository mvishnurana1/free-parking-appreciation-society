import { Pipe, PipeTransform } from '@angular/core';
import { addHours } from 'date-fns';
import { DateService } from 'src/services/date.service';
import { Driver } from '../models/driver';

@Pipe({
  name: 'remainingDriverMinutes'
})
export class RemainingDriverMinutesPipe implements PipeTransform {
  constructor(
    private readonly dateService: DateService,
  ) {}

  transform(driver: Driver): number {
      const carParkType = Number(driver.carParkType[0]);
      const parkedTill = addHours(driver.timeParked, carParkType);

      return this.dateService.timeDifferenceInMinutes(parkedTill, new Date(Date.now()));
  }

}

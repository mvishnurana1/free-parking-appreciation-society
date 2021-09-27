import { Injectable } from '@angular/core';
import { data } from 'src/app/fake-data/fake-data';
import { Driver } from 'src/app/models/driver';
import { DateService } from './date.service';
import { addHours } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  drivers: Array<Driver> = data;
  timeRemaining: number;

  constructor(
    private readonly dateService: DateService,
  ) { }

  gettimeRemainingInMinutesForDriver(driver: Driver): number {
    const carParkType = Number(driver.carParkType[0]);
    const parkedTill = addHours(driver.timeParked, carParkType);

    return this.dateService.timeDifferenceInMinutes(parkedTill, new Date(Date.now()))
  }
}

import { Injectable } from '@angular/core';
import { Driver } from 'src/app/models/driver';
import { DateService } from './date.service';
import { addHours } from 'date-fns';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private drivers: BehaviorSubject<Array<Driver>> = new BehaviorSubject<Array<Driver>>([]);
  drivers$ = this.drivers.asObservable();

  constructor(
    private readonly dateService: DateService,
  ) { }

  gettimeRemainingInMinutesForDriver(driver: Driver): number {
    const carParkType = Number(driver.carParkType[0]);
    const parkedTill = addHours(driver.timeParked, carParkType);

    return this.dateService.timeDifferenceInMinutes(parkedTill, new Date(Date.now()));
  }

  addDriver(driver: Driver):  void {
    this.drivers.next(this.drivers.getValue().concat([driver]));
  }
}

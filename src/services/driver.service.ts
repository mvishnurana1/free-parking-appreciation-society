import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Driver } from 'src/app/models/driver';
import { DateService } from './date.service';
import { addHours } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private drivers: BehaviorSubject<Array<Driver>> = new BehaviorSubject<Array<Driver>>(JSON.parse(localStorage.getItem('drivers')));
  drivers$: Observable<Driver[]> = this.drivers.asObservable();

  constructor(
    private readonly dateService: DateService,
  ) { }

  getTimeRemainingInMinutesForDriver(driver: Driver): number {
    const carParkType = Number(driver.carParkType[0]);
    const parkedTill = addHours(driver.timeParked, carParkType);

    return this.dateService.timeDifferenceInMinutes(parkedTill, new Date(Date.now()));
  }

  addDriver(driver: Driver):  void {
    const current = this.drivers.value;
    current.push(driver);
    localStorage.setItem('drivers', JSON.stringify(this.drivers.value));
    this.drivers.next(current);
  }
}

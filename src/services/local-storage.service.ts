import { Injectable } from '@angular/core';
import { DriverService } from './driver.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(
    private readonly driverService: DriverService,
  ) { }

  CleanseDriverStorage(): void {
    const drivers = JSON.parse(localStorage.getItem('drivers'));
    const activeDrivers = [];

    if (drivers.length) {
      drivers.filter((driver) => {
        if (this.driverService.getTimeRemainingInMinutesForDriver(driver) > 0) {
          activeDrivers.push(driver);

          localStorage.removeItem('drivers');
          localStorage.setItem('drivers', JSON.stringify(activeDrivers))
        }
      });
    }
  }
}

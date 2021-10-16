import { Pipe, PipeTransform } from '@angular/core';
import { DriverService } from 'src/services/driver.service';
import { Driver } from '../models/driver';

@Pipe({
  name: 'validDrivers'
})
export class ValidDriversPipe implements PipeTransform {
  constructor(
    private readonly driverService: DriverService,
  ) {}

  transform(data: Array<Driver>): Array<Driver> {
    let newArray: Array<Driver> = [];

    data.filter((driver) => {
      if (this.driverService.getTimeRemainingInMinutesForDriver(driver) > 0) {
        newArray = [...newArray, driver];
      }
    });

    return newArray;
  }
}

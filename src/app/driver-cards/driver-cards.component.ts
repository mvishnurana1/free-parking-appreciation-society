import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DriverService } from 'src/services/driver.service';
import { Driver } from '../models/driver';

@Component({
  selector: 'driver-cards',
  templateUrl: './driver-cards.component.html',
  styleUrls: ['./driver-cards.component.scss'],
})
export class DriverCardsComponent {
  drivers: Array<Driver> = this.driverService.drivers;

  constructor(
    private readonly driverService: DriverService,
  ) {}

  getTimeRemainingForDriver(driver: Driver): number {
    return this.driverService.gettimeRemainingInMinutesForDriver(driver);
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DriverService } from 'src/services/driver/driver.service';

@Component({
  selector: 'driver-cards',
  templateUrl: './driver-cards.component.html',
  styleUrls: ['./driver-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriverCardsComponent  {
  drivers$ = this.driverService.drivers$;

  constructor(
    private readonly driverService: DriverService,
  ) {}
}

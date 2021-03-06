import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DriverService } from 'src/services/driver.service';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'driver-cards',
  templateUrl: './driver-cards.component.html',
  styleUrls: ['./driver-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriverCardsComponent  {
  drivers$ = this.driverService.drivers$
    .pipe(
      tap(() => {
        this.localStorageService.CleanseDriverStorage();
      })
    );


  constructor(
    private readonly driverService: DriverService,
    private readonly localStorageService: LocalStorageService,
  ) {}
}

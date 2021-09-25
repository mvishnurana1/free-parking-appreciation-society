import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Driver } from '../models/driver';
import  { data }  from './../fake-data/fake-data';

@Component({
  selector: 'driver-cards',
  templateUrl: './driver-cards.component.html',
  styleUrls: ['./driver-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriverCardsComponent {
  drivers: Array<Driver> = data;
}

import { Injectable } from '@angular/core';
import { data } from 'src/app/fake-data/fake-data';
import { Driver } from 'src/app/models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  drivers: Array<Driver> = data;

  constructor() { }
}

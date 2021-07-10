import { Component, OnInit } from '@angular/core';
import { carPark } from '../models/car-park';
import { Driver } from '../models/driver';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  drivers: Array<Driver> = [];

  driver: Driver = {
    firstName: Driver.prototype.firstName,
    time: Driver.prototype.time,
    carParkType: Driver.prototype.carParkType,
    location: Driver.prototype.location
  }

  constructor() { }

  ngOnInit(): void {
  }

  incrementDriverList(): void {
    console.log(this.driver);
    this.drivers.push(this.driver);

    console.log(this.drivers);

    this.clearForm();
  }

  onSubmit(e: Event): void {
    e.preventDefault();
  }

  clearForm(): void {
    this.driver = {
      firstName: '',
      carParkType: null,
      time: null,
      location: ''
    }
  }
}

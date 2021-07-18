import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/driver';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  drivers: Array<Driver> = [];
  hours = [];
  minutes = [];

  driver: Driver = {
    firstName: Driver.prototype.firstName,
    hour: Driver.prototype.hour,
    minute: Driver.prototype.minute,
    carParkType: Driver.prototype.carParkType,
    location: Driver.prototype.location
  }

  constructor() { }

  ngOnInit(): void {
    this.populateHoursAndMinutes();
  }

  populateHoursAndMinutes(): void {
    const hour = new Date().getHours();

    this.hours.push(hour, hour - 1, hour - 2);
    this.minutes.push(0, 15, 30, 45);
  }

  incrementDriverList(): void {
    console.log(this.driver);
    this.drivers.unshift(this.driver);

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
      hour: null,
      minute: null,
      location: ''
    }
  }
}

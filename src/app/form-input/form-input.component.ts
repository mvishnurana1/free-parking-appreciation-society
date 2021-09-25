import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { data }  from './../fake-data/fake-data';
import { Driver } from '../models/driver';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  drivers: Array<Driver> = data;
  hours = [];
  minutes = [];

  driverForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.populateHoursAndMinutes();

    this.driverForm = this.fb.group({
      name: [null, Validators.required],
      carParkType: [null, Validators.required],
      location: [null, Validators.required],
    });
  }

  populateHoursAndMinutes(): void {
    const hour = new Date().getHours();

    this.hours.push(hour, hour - 1, hour - 2);
    this.minutes.push(0, 15, 30, 45);
  }

  incrementDriverList(): void {
    this.clearForm();
  }

  onSubmit(e: Event): void {
    e.preventDefault();
  }

  clearForm(): void {
  }
}

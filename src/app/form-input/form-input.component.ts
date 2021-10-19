import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { subHours } from 'date-fns';
import { Driver } from '../models/driver';
import { DateService } from 'src/services/date/date.service';
import { DriverService } from 'src/services/driver/driver.service';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent implements OnInit {
  drivers$ = this.driverService.drivers$;
  currentTime: string;
  minimumTime: string;

  driverForm: FormGroup = this.fb.group({
    firstName: [null, Validators.required],
    carParkType: [null, Validators.required],
    timeParked: [null, Validators.required],
    location: [null, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly dateService: DateService,
    private readonly driverService: DriverService,
  ) { }

  ngOnInit(): void {
    this.currentTime = this.dateService.transFormShort(new Date(Date.now()));

    this.driverForm.get('carParkType').valueChanges
    .pipe(
      tap((latestCarParkTypeValue) => {
        if (latestCarParkTypeValue) {
          this.minimumTime = this.dateService.transFormShort(subHours(new Date(Date.now()), latestCarParkTypeValue[0]));
        }
      })
    )
    .subscribe();
  }

  incrementDriverList(): void {
    const driver: Driver = this.driverForm.value;

    this.driverService.addDriver(driver);
    this.clearForm();
  }

  clearForm(): void {
    this.driverForm.reset();
  }
}

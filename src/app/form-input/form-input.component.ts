import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { subHours } from 'date-fns';
import { Driver } from '../models/driver';
import { DateService } from 'src/services/date.service';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent implements OnInit {
  currentTime: string;
  minimumTime: string;
  difference: Date;

  driverForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    carParkType: [null, Validators.required],
    parkedTime: [null, Validators.required],
    location: [null, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly dateService: DateService,
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
    this.clearForm();
  }

  clearForm(): void {
  }
}

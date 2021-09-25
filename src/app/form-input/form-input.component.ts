import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { subHours } from 'date-fns';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent implements OnInit {
  currentTime: string;
  minimumTime: string;

  driverForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    carParkType: [null, Validators.required],
    parkedTime: [null, Validators.required],
    location: [null, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.currentTime = this.datePipe.transform(new Date(Date.now()), 'h:mm a');

    this.driverForm.get('carParkType').valueChanges
    .pipe(
      tap((latestCarParkTypeValue) => {
        if (latestCarParkTypeValue) {
          this.minimumTime = this.datePipe.transform(subHours(new Date(Date.now()), latestCarParkTypeValue[0]), 'h:mm a');
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

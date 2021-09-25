import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent implements OnInit {
  driverForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    carParkType: [null, Validators.required],
    parkedTime: [null, Validators.required],
    location: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  incrementDriverList(): void {
    this.clearForm();
  }

  clearForm(): void {
  }
}

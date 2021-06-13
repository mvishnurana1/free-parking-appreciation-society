import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  name: null;
  lastName?: null;
  parkingType: string;
  constructor() { }

  ngOnInit(): void {
  }

}

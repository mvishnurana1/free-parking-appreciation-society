import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DriverCardsComponent } from './driver-cards/driver-cards.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DatePipe } from '@angular/common';
import { DriverService } from 'src/services/driver.service';
import { DateService } from 'src/services/date/date.service';
import { ValidDriversPipe } from './pipes/valid-drivers.pipe';
import { RemainingDriverMinutesPipe } from './pipes/remaining-driver-minutes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    DriverCardsComponent,
    ValidDriversPipe,
    RemainingDriverMinutesPipe,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMaterialTimepickerModule
  ],
  providers: [
    DatePipe,
    DateService,
    DriverService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

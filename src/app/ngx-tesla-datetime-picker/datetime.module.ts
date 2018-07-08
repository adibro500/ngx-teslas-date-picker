import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTeslaDatetimePickerComponent } from './ngx-tesla-datetime-picker.component';
import { NgxTeslaDatetimePickerDirective } from './ngx-tesla-datetime-picker.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxTeslaDatetimePickerComponent,
    NgxTeslaDatetimePickerDirective
  ],
  exports:[
    NgxTeslaDatetimePickerComponent,
    NgxTeslaDatetimePickerDirective
  ]
})
export class DatetimeModule { }

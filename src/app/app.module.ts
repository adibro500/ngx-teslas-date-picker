import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatetimeModule } from 'src/app/ngx-tesla-datetime-picker/datetime.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DatetimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

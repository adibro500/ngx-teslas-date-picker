import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-tesla-datetime-picker',
  templateUrl: './ngx-tesla-datetime-picker.component.html',
  styleUrls: ['./ngx-tesla-datetime-picker.component.css']
})
export class NgxTeslaDatetimePickerComponent  {
  
  constructor() { 
  }
  startChange(e){
    console.log(e)
  }
  
  }


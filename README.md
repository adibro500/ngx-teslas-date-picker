# NgxTeslasDatePicker for Angular 4+

This is an angular directive for date-time picker. This is built on top of jquery.

## Installation
```
npm install --save ngx-teslas-date-picker
```

## Usage

### In angular-cli/angular.json add styles and scripts:

```
"styles": [
"./node_modules/ngx-teslas-date-picker/src/assets/jquery-ui.css",
"./node_modules/ngx-teslas-date-picker/src/assets/css/jquery-ui-timepicker-addon.css"
],
"scripts": [
"./node_modules/ngx-teslas-date-picker/src/assets/js/jquery.js",              
"./node_modules/ngx-teslas-date-picker/src/assets/jquery-ui.js",
"./node_modules/ngx-teslas-date-picker/src/assets/js/jquery-ui-timepicker-addon.js"
],
```

### Inside app.module file import the directive and module:

```
import {DatetimeModule, NgxTeslaDatetimePickerDirective} from 'ngx-teslas-date-picker';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    DatetimeModule
  ],
  providers: [NgxTeslaDatetimePickerDirective],
  bootstrap: [...]
})
export class AppModule { }

```
### In your HTML file you can do:

```
<input type="text" id="startid" [readonly]="false" [minimumDate]="false" [onlyDatePicker]="false" (dateChange)="onStartDateChange($event)" appNgxTeslaDatetimePicker/>
```
### You can also access the value of the picker in your component file like so:

```
startDate:any = new Date();
onStartDateChange(date){
    this.startDate = date;
    this.startDate = new Date(this.startDate).toISOString();
  }
```
Thanks from adibro...
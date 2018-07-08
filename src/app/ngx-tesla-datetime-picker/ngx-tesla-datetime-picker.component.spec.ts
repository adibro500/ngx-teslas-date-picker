import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTeslaDatetimePickerComponent } from './ngx-tesla-datetime-picker.component';

describe('NgxTeslaDatetimePickerComponent', () => {
  let component: NgxTeslaDatetimePickerComponent;
  let fixture: ComponentFixture<NgxTeslaDatetimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTeslaDatetimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTeslaDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

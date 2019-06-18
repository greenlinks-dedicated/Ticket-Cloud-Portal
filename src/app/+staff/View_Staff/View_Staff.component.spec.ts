/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { View_StaffComponent } from './View_Staff.component';

describe('View_StaffComponent', () => {
  let component: View_StaffComponent;
  let fixture: ComponentFixture<View_StaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View_StaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View_StaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

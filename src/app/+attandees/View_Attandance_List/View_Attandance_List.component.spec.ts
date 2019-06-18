/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { View_Attandance_ListComponent } from './View_Attandance_List.component';

describe('View_Attandance_ListComponent', () => {
  let component: View_Attandance_ListComponent;
  let fixture: ComponentFixture<View_Attandance_ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View_Attandance_ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View_Attandance_ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

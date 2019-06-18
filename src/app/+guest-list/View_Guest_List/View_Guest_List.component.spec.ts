/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { View_Guest_ListComponent } from './View_Guest_List.component';

describe('View_Guest_ListComponent', () => {
  let component: View_Guest_ListComponent;
  let fixture: ComponentFixture<View_Guest_ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View_Guest_ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View_Guest_ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

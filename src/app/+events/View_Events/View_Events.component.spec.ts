/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { View_EventsComponent } from './View_Events.component';

describe('View_EventsComponent', () => {
  let component: View_EventsComponent;
  let fixture: ComponentFixture<View_EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View_EventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View_EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

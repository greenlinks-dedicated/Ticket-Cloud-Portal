/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { View_TicketsComponent } from './View_Tickets.component';

describe('View_TicketsComponent', () => {
  let component: View_TicketsComponent;
  let fixture: ComponentFixture<View_TicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View_TicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View_TicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

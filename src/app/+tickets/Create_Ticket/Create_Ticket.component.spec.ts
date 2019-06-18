/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Create_TicketComponent } from './Create_Ticket.component';

describe('Create_TicketComponent', () => {
  let component: Create_TicketComponent;
  let fixture: ComponentFixture<Create_TicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create_TicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create_TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

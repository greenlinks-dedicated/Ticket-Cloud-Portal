/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Create_GuestComponent } from './Create_Guest.component';

describe('Create_GuestComponent', () => {
  let component: Create_GuestComponent;
  let fixture: ComponentFixture<Create_GuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create_GuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create_GuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

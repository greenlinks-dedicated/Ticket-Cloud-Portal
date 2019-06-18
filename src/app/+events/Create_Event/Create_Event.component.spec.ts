/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Create_EventComponent } from './Create_Event.component';

describe('Create_EventComponent', () => {
  let component: Create_EventComponent;
  let fixture: ComponentFixture<Create_EventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create_EventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create_EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { View_profileComponent } from './view_profile.component';

describe('View_profileComponent', () => {
  let component: View_profileComponent;
  let fixture: ComponentFixture<View_profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View_profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View_profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

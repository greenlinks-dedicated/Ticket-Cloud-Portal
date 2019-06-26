/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { View_SalesComponent } from './View_Sales.component';

describe('View_SalesComponent', () => {
  let component: View_SalesComponent;
  let fixture: ComponentFixture<View_SalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View_SalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View_SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Search_Event_SalesComponent } from './Search_Event_Sales.component';

describe('Search_Event_SalesComponent', () => {
  let component: Search_Event_SalesComponent;
  let fixture: ComponentFixture<Search_Event_SalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Search_Event_SalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Search_Event_SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

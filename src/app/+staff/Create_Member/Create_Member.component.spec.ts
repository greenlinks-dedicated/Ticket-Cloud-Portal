/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Create_MemberComponent } from './Create_Member.component';

describe('Create_MemberComponent', () => {
  let component: Create_MemberComponent;
  let fixture: ComponentFixture<Create_MemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create_MemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create_MemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprofileComponent_admin } from './viewprofile.component';

describe('ViewprofileComponent', () => {
  let component: ViewprofileComponent_admin;
  let fixture: ComponentFixture<ViewprofileComponent_admin>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewprofileComponent_admin]
    });
    fixture = TestBed.createComponent(ViewprofileComponent_admin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

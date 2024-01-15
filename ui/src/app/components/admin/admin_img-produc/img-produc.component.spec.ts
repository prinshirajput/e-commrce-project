import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin_IMGPRODUCComponent } from './img-produc.component';

describe('Admin_IMGPRODUCComponent', () => {
  let component: Admin_IMGPRODUCComponent;
  let fixture: ComponentFixture<Admin_IMGPRODUCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Admin_IMGPRODUCComponent]
    });
    fixture = TestBed.createComponent(Admin_IMGPRODUCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

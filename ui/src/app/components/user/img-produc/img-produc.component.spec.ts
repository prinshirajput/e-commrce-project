import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMGPRODUCComponent } from './img-produc.component';

describe('IMGPRODUCComponent', () => {
  let component: IMGPRODUCComponent;
  let fixture: ComponentFixture<IMGPRODUCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IMGPRODUCComponent]
    });
    fixture = TestBed.createComponent(IMGPRODUCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

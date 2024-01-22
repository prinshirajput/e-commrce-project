import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMGPRODUCComponent2} from './img-produc.component';

describe('IMGPRODUCComponent', () => {
  let component: IMGPRODUCComponent2;
  let fixture: ComponentFixture<IMGPRODUCComponent2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IMGPRODUCComponent2]
    });
    fixture = TestBed.createComponent(IMGPRODUCComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

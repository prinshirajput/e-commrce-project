import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshboredComponent } from './deshbored.component';

describe('DeshboredComponent', () => {
  let component: DeshboredComponent;
  let fixture: ComponentFixture<DeshboredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeshboredComponent]
    });
    fixture = TestBed.createComponent(DeshboredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

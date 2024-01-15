import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllProductComponent } from './show-all-product.component';

describe('ShowAllProductComponent', () => {
  let component: ShowAllProductComponent;
  let fixture: ComponentFixture<ShowAllProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllProductComponent]
    });
    fixture = TestBed.createComponent(ShowAllProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

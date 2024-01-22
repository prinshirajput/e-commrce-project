import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeProductComponent } from './like-product.component';

describe('LikeProductComponent', () => {
  let component: LikeProductComponent;
  let fixture: ComponentFixture<LikeProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeProductComponent]
    });
    fixture = TestBed.createComponent(LikeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

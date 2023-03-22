import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceProductComponent } from './insurance-product.component';

describe('InsuranceProductComponent', () => {
  let component: InsuranceProductComponent;
  let fixture: ComponentFixture<InsuranceProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

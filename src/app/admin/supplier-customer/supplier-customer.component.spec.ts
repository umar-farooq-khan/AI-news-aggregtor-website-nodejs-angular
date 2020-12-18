import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCustomerComponent } from './supplier-customer.component';

describe('SupplierCustomerComponent', () => {
  let component: SupplierCustomerComponent;
  let fixture: ComponentFixture<SupplierCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

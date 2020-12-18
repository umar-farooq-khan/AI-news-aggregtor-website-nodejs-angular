import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsupplierCustomerComponent } from './ssupplier-customer.component';

describe('SsupplierCustomerComponent', () => {
  let component: SsupplierCustomerComponent;
  let fixture: ComponentFixture<SsupplierCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsupplierCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsupplierCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

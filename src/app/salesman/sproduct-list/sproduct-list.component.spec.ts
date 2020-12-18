import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SproductListComponent } from './sproduct-list.component';

describe('SproductListComponent', () => {
  let component: SproductListComponent;
  let fixture: ComponentFixture<SproductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SproductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SproductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersPricingComponent } from './employers-pricing.component';

describe('EmployersPricingComponent', () => {
  let component: EmployersPricingComponent;
  let fixture: ComponentFixture<EmployersPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

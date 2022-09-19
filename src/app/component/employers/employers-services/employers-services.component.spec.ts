import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersServicesComponent } from './employers-services.component';

describe('EmployersServicesComponent', () => {
  let component: EmployersServicesComponent;
  let fixture: ComponentFixture<EmployersServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

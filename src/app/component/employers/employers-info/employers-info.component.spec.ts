import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersInfoComponent } from './employers-info.component';

describe('EmployersInfoComponent', () => {
  let component: EmployersInfoComponent;
  let fixture: ComponentFixture<EmployersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

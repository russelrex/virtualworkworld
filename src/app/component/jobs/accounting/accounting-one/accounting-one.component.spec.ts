import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingOneComponent } from './accounting-one.component';

describe('AccountingOneComponent', () => {
  let component: AccountingOneComponent;
  let fixture: ComponentFixture<AccountingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

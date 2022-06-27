import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingTwoComponent } from './accounting-two.component';

describe('AccountingTwoComponent', () => {
  let component: AccountingTwoComponent;
  let fixture: ComponentFixture<AccountingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

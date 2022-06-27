import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingThreeComponent } from './accounting-three.component';

describe('AccountingThreeComponent', () => {
  let component: AccountingThreeComponent;
  let fixture: ComponentFixture<AccountingThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

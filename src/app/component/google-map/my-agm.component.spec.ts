import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAgmComponent } from './my-agm.component';

describe('MyAgmComponent', () => {
  let component: MyAgmComponent;
  let fixture: ComponentFixture<MyAgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAgmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

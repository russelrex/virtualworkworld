import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsCandidateComponent } from './jobs-candidate.component';

describe('JobsCandidateComponent', () => {
  let component: JobsCandidateComponent;
  let fixture: ComponentFixture<JobsCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

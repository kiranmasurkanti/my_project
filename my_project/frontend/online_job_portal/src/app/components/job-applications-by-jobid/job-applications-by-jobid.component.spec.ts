import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationsByJobidComponent } from './job-applications-by-jobid.component';

describe('JobApplicationsByJobidComponent', () => {
  let component: JobApplicationsByJobidComponent;
  let fixture: ComponentFixture<JobApplicationsByJobidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobApplicationsByJobidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobApplicationsByJobidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

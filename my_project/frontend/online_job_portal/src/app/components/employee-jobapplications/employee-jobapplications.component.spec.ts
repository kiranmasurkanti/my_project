import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeJobapplicationsComponent } from './employee-jobapplications.component';

describe('EmployeeJobapplicationsComponent', () => {
  let component: EmployeeJobapplicationsComponent;
  let fixture: ComponentFixture<EmployeeJobapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeJobapplicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeJobapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

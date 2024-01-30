import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobapplicationsComponent } from './list-jobapplications.component';

describe('ListJobapplicationsComponent', () => {
  let component: ListJobapplicationsComponent;
  let fixture: ComponentFixture<ListJobapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListJobapplicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListJobapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobcategoriesComponent } from './list-jobcategories.component';

describe('ListJobcategoriesComponent', () => {
  let component: ListJobcategoriesComponent;
  let fixture: ComponentFixture<ListJobcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListJobcategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListJobcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

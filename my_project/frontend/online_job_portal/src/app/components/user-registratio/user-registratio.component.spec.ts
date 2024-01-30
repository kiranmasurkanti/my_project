import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistratioComponent } from './user-registratio.component';

describe('UserRegistratioComponent', () => {
  let component: UserRegistratioComponent;
  let fixture: ComponentFixture<UserRegistratioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegistratioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRegistratioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

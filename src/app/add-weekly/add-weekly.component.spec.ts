import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeeklyComponent } from './add-weekly.component';

describe('AddWeeklyComponent', () => {
  let component: AddWeeklyComponent;
  let fixture: ComponentFixture<AddWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWeeklyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

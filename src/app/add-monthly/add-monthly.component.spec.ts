import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonthlyComponent } from './add-monthly.component';

describe('AddMonthlyComponent', () => {
  let component: AddMonthlyComponent;
  let fixture: ComponentFixture<AddMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMonthlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

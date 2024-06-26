import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryContextComponent } from './salary-context.component';

describe('SalaryContextComponent', () => {
  let component: SalaryContextComponent;
  let fixture: ComponentFixture<SalaryContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

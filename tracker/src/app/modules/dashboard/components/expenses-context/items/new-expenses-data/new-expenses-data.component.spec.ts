import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpensesDataComponent } from './new-expenses-data.component';

describe('NewExpensesDataComponent', () => {
  let component: NewExpensesDataComponent;
  let fixture: ComponentFixture<NewExpensesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExpensesDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExpensesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

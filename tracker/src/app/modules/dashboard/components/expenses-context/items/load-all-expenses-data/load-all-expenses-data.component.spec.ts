import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAllExpensesDataComponent } from './load-all-expenses-data.component';

describe('LoadAllExpensesDataComponent', () => {
  let component: LoadAllExpensesDataComponent;
  let fixture: ComponentFixture<LoadAllExpensesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadAllExpensesDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadAllExpensesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

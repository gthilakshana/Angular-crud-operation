import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ExpensesService } from "../../Expenses.service";
import { Expense } from "../../Expense";

@Component({
  selector: 'app-new-expenses-data',
  templateUrl: './new-expenses-data.component.html',
  styleUrls: ['./new-expenses-data.component.scss']
})
export class NewExpensesDataComponent {

  constructor(private service: ExpensesService) {}

  expensesDataForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    cost: new FormControl(0, [Validators.required, Validators.min(0)]) // Added Validators.min(0) to ensure the cost is non-negative
  });

  save() {
    if (this.expensesDataForm.valid) {
      const data: Expense = {
        title: this.expensesDataForm.get('title')?.value!,
        description: this.expensesDataForm.get('description')?.value!,
        cost: this.expensesDataForm.get('cost')?.value!
      };

      this.service.createData(data)
        .then(response => {
          console.log('Data saved successfully:', response);
        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
    } else {
      this.expensesDataForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
      console.log('Form is invalid');
    }
  }
}

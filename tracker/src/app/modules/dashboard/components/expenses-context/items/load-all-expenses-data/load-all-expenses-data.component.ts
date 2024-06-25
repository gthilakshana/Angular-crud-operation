import { Component, OnInit } from '@angular/core';
import {ExpensesService} from "../../Expenses.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-load-all-expenses-data',
  templateUrl: './load-all-expenses-data.component.html',
  styleUrls: ['./load-all-expenses-data.component.scss']
})
export class LoadAllExpensesDataComponent implements OnInit {

  expenses: Array<any> =[];

  constructor(private service: ExpensesService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.service.loadAll().subscribe(
      response => {
        this.expenses = response;
      },
      error => {
        console.error(error);
      });
  }

  delete(id: string) {
    if (confirm('Are you sure?')) {
      this.service.delete(id)
        .then(() => {
          // Assuming deletion was successful, fetch updated expenses
          this.fetchExpenses();
        })
        .catch(error => {
          console.error('Error deleting document:', error);
          // Handle error based on your application's requirements
          // Example: show error message to user
          // this.errorMessage = 'Failed to delete expense.';
        });
    }
  }

  fetchExpenses() {
    this.service.loadAll()
      .subscribe(
        expenses => {
          this.expenses = expenses;
        },
        error => {
          console.error('Error fetching expenses:', error);

        }
      );
  }



}

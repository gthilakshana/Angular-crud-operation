import { Component } from '@angular/core';
import {ExpensesService} from "../../Expenses.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-find-expenses-data',
  templateUrl: './find-expenses-data.component.html',
  styleUrls: ['./find-expenses-data.component.scss']
})
export class FindExpensesDataComponent {
  constructor(private service: ExpensesService) {}

  expensesDataForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    cost: new FormControl(0, Validators.required) // Added Validators.min(0) to ensure the cost is non-negative
  });

  findData() {

      this.service.findDataById(this.expensesDataForm.get('id')?.value!)
        .subscribe(response=>{
        this.expensesDataForm.patchValue({
          title: response.title,
          description: response.description,
          cost: response.cost
        });
      },error=>{
        console.log(error);
      })


  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';
import { OperationsService } from 'src/app/core/services/operations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gasto-from-retirar',
  templateUrl: './gasto-from-retirar.component.html',
  styleUrls: ['./gasto-from-retirar.component.scss']
})
export class GastoFromRetirarComponent implements OnInit {

  form: FormGroup;
  amount: number;
  concept: string;
  date: string;
  user: any[] = [];

  constructor(public fb: FormBuilder, public serv: OperationsService, public servAccounts: GetallaccountsService) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      'amount': ['', [Validators.required, Validators.min(1)]],
      'concept': ['', [Validators.required, Validators.minLength(3)]],
      'date': ['', [Validators.required]],
    })
    let value = new Date();
    this.date = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();

    this.servAccounts.getRelatedAccount().subscribe({
      next: data => {
        this.user = data;
      }
    })
  }

  retirarDinero() {
    try {

      let amount, concept
      amount = this.form.value.account;
      concept = this.form.value.concepto;

      this.serv.withdraw(this.user[0].id, amount).subscribe(item => {
        console.log(item);
      })

      this.amount = 0;
      this.concept = '';

      Swal.fire({
        icon: 'success',
        title: 'La operación se realizo con exito',
        showConfirmButton: false,
        timer: 1500,
      });

    } catch (error) {
      console.log(error);
    }

  }

}

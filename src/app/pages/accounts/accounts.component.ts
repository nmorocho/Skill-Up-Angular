import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  
  constructor(private userlistservice: GetallaccountsService, private router: Router, private http: HttpClient) { }

  accountList: any[] = [];
  isLoading: boolean = true;
  accountListLoad: boolean = false;
  public chargeMoneyForm: FormGroup;

  ngOnInit(): void {
    this.getAllAccounts();
    this.chargeMoneyForm = new FormGroup({
      amount: new FormControl('')
    });
  }

  sendMoney() {
    setTimeout(() => this.router.navigate(['/usuarios-list']), 700);
  }

  chargeMoneyAPI(id: number,body:any): Observable<any> {
    return this.http.post(`${environment.API_URL}/accounts/${id}`, body);
  }

  chargeMoney() {
    let body= {
      'type': 'topup',
      'concept': 'Carga de dinero',
      'amount': this.chargeMoneyForm.value.amount
    }
    this.chargeMoneyAPI(JSON.parse(localStorage.getItem('selectedAccount')).id, body).subscribe({ next: data => console.log(data),error:error=>console.log(error)
     });
    this.chargeMoneyForm.reset();
    this.getAllAccounts();
  }

  getAllAccounts() {
    this.userlistservice.getRelatedAccount().subscribe(
      {
        next: data => {
          this.accountList = [...data];
          this.accountListLoad = true;
          this.accountList.map((account, index, array) => {
            array[index] = { ...account, isSelected : false }  
          });
          this.isLoading = false;
        }
      }
    )
  }

  setAccount(data: any) {
    if (this.accountList.some(accountList => accountList.isSelected === true)) {
      this.accountList.forEach((account, index, array) => {
        if (account.isSelected) {
          array[index].isSelected = false;
        }
        if (account.id === data.id) {
          array[index].isSelected = true;
          localStorage.setItem('selectedAccount', JSON.stringify(array[index]));
        }
      });
    } else {
      this.accountList.forEach((account, index, array) => {
        if (account.id === data.id) {
          array[index].isSelected = true;
          localStorage.setItem('selectedAccount', JSON.stringify(array[index]));
        }
      });
    }
    localStorage.setItem('userAccountList', JSON.stringify(this.accountList));
  }
}



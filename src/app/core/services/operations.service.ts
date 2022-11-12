import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../interfaces/Account.interface';
import { Transaction, Transactions } from '../interfaces/Transaction.interface';
import { GetallaccountsService } from './getallaccounts.service';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  public infoTransactions: Transactions
  constructor(private http: HttpClient, private getAllAccountService: GetallaccountsService) {
    this.viewProfileTransaction().subscribe(data => {
      console.log(data);
    })
  }


  viewProfileTransaction(page: string = "/transactions/?page=1"): Observable<Transactions> {
    return this.http.get<Transactions>(`${environment.API_URL}${page}`)
      .pipe(
        tap(resp => {
          this.infoTransactions = resp
        })
      );
  }
  deleteTransaction(id: string) {
    return this.http.delete<Transaction>(`${environment.API_URL}/transactions/${id}`)
      .pipe(tap((data) => {
        if (typeof data.accountId !== 'undefined') {
          this.infoTransactions.data = this.infoTransactions
            .data.filter(transaction => transaction.id !== id)
        }
      }))
  }
  editTransaction(id: string, newBody: Transaction) {
    return this.http.put<Transaction>(`${environment.API_URL}/transactions/${id}`, newBody)
      .pipe(tap((data) => {
        if (typeof data.accountId !== 'undefined') {
          this.infoTransactions.data = this.infoTransactions
            .data.map(transaction => transaction.id === id ? { ...transaction, concept: newBody.concept } : transaction)
        }
      }))
  }

  withdraw(accountId: number, ammount: number, all: boolean = false): Observable<Account> {
    if(all){
      return this.http.put<Account>(`${environment.API_URL}/accounts/${accountId}`, { money: 0 })
      .pipe(
        tap(data => {
          if (data.id) { this.getAllAccountService.ChangeMoneyByAccountId(accountId, JSON.stringify(0)) }
        })
      )
    }
    const currentMoney = this.getAllAccountService.accountList.find(account => account.id === accountId).money
    const newMoney = Number(currentMoney) - ammount
    return this.http.put<Account>(`${environment.API_URL}/accounts/${accountId}`, { money: newMoney })
      .pipe(
        tap(data => {
          if (data.id) { this.getAllAccountService.ChangeMoneyByAccountId(accountId, JSON.stringify(newMoney)) }
        })
      )
  }


}

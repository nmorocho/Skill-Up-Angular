import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Transaction, Transactions } from 'src/app/core/interfaces/Transaction.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { OperationsService } from 'src/app/core/services/operations.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {
  constructor(
    private http: HttpClient,
    private operationsService: OperationsService
  ) { }
  public editItemId: string = ""
  get infoTransactions(): Transactions { return this.operationsService.infoTransactions }

  setEditItemId(id: string) {
    this.editItemId = id
  }
  @ViewChild('editConcept',{static:false}) editConcept: ElementRef<HTMLInputElement>


  changePage(page: string) {
    this.operationsService.viewProfileTransaction(page)
      .subscribe(console.log)
  }
  modifyDate(date: string) {
    return date.substring(0, 10)
  }
  deletetransaction(id: string) {
    this.operationsService.deleteTransaction(id)
      .subscribe(console.log)
  }
  confirmEdit(button:HTMLButtonElement,transaction:Transaction) {
    const newConcept = button.parentElement.parentElement.querySelector("input").value
    transaction.concept = newConcept
    this.operationsService.editTransaction(this.editItemId,transaction)
      .subscribe(console.log)
    this.setEditItemId("")
  }
}



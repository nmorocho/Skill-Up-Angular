import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Transaction, Transactions } from 'src/app/core/interfaces/Transaction.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  data: Transactions
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.changePage()
  }

  changePage(page: string = "/transactions/?page=1") {
    const customHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
    this.http.get<Transactions>(
      `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com${page}`,
      { headers: customHeaders }
    ).subscribe(info => {
      console.log(info)
      this.data = info
    })
  }
  modifiDate(date:string){
    return date.substring(0,10)
  }

}



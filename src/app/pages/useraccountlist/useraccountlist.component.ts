import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';
import { HandleLocalStorageService } from 'src/app/core/services/handle-local-storage.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { TokenService } from 'src/app/core/services/token.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-useraccountlist',
  templateUrl: './useraccountlist.component.html',
  styleUrls: ['./useraccountlist.component.scss']
})
export class UseraccountlistComponent implements OnInit {


  public nombre: string = "anaanana"
  userAccountsLs: any[] = [];
  pago: FormGroup;

  transaction: FormGroup;

  accountId: number;
  numero: number;

  constructor(private getallaccountsrv: GetallaccountsService,
    private http: HttpClient,
    private router: Router,
    private spi: SpinnerService,
    private tokenservice: TokenService,
   ) {}
  

  public isLoading: boolean = true;
  public userAccounts: any[] = [];
  private contador: number = 1;

  ngOnInit(): void {


    this.searchAccounts();

    this.pago = new FormGroup({
      amount: new FormControl(''),
      concept: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
    //
    this.transaction = new FormGroup({
      amount: new FormControl(''),
      accountId: new FormControl(''),
      concept: new FormControl(''),
      userId: new FormControl(''),
      to_account_id: new FormControl(''),
    });

  }

  ngOnDestroy() {
    this.spi.callhide();
    this.router.navigate(['usuarios-list']);

  }

  searchAccounts() {

    this.getallaccountsrv.getTenAccounts(this.contador).subscribe(
      {

        next: (info: any) => {
          if (info.nextPage !== null) {
            this.userAccounts = [...this.userAccounts, ...info.data];
            this.contador++;
            this.searchAccounts();

          } else {
            this.userAccounts = this.userAccounts.filter((userAccount) => userAccount.userId === this.getallaccountsrv.idUser);
            this.isLoading = false;
            this.spi.callhide();
          }

        },
        error: (error: Error) => {
          console.log(error);
          this.isLoading = false;
        },
      }
    )
  }

  selectedaccount: any;

  onSelect(account: any) {
    this.selectedaccount = account;
  }

  onSend(account: any) {

    this.getallaccountsrv.sendMoney(account.id)
    console.log(account.id);
    this.spi.callshow()
    const customHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.tokenservice.getToken}`,
    });

    return this.http.post(
      `${environment.API_URL}/accounts/${account.id}`,
      {
        "type": "payment",
        "concept": this.pago.value.concept,
        "amount": this.pago.value.amount
      },
      {
        headers: customHeaders,
        observe: 'response'
      }).subscribe(
        (response) => {

          if (response.status === 200) {
            Swal.fire('transferencia realizada con exito')
          }
          console.log(response.status);

          this.spi.callhide();
        })


  }

  date = new Date()
  onSendTransaction(account: any) {

    this.getallaccountsrv.sendMoney(account.id)
    console.log(account.id);
    this.spi.callshow()
    const customHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.tokenservice.getToken}`,
    });

    return this.http.post(
      `${environment.API_URL}/transactions`,
      {
        "amount": this.transaction.value.amount,
        "concept": this.transaction.value.concept,
        "date": this.date.getUTCDay,
        "type": "payment",
        "accountId": this.transaction.value.accountId,
        "userId": this.transaction.value.userId,
        "to_account_id": account.id

      },
      {
        headers: customHeaders,
        observe: 'response'
      }).subscribe(
        (response) => {

          if (response.status === 201) {
            Swal.fire('Pago realizado con exito')
          }

          console.log(response.body);

          this.spi.callhide();
        })
  }


  getAcoun() {


    this.transaction.patchValue({
      accountId: `${JSON.parse(localStorage.getItem('selectedAccount')).id}`,
      userId: JSON.parse(localStorage.getItem('selectedAccount')).userId

    })

  }
}



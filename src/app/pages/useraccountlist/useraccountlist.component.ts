import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Imonto } from 'src/app/core/interfaces/imonto';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { TokenService } from 'src/app/core/services/token.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-useraccountlist',
  templateUrl: './useraccountlist.component.html',
  styleUrls: ['./useraccountlist.component.scss']
})
export class UseraccountlistComponent implements OnInit {
  

  constructor(private getallaccountsrv:GetallaccountsService,
     private http: HttpClient,
    private router: Router,
    private spi : SpinnerService,
    private tokenservice : TokenService) { 

      this.pago = new FormGroup({
        amount: new FormControl('', [Validators.required]),
        concept: new FormControl('', [ Validators.required]),
      });
    }
  
  pago : FormGroup;
  public isLoading: boolean = true;
  public userAccounts: any[] = [];
  private contador: number = 1;

  ngOnInit(): void {
    this.searchAccounts();
    console.log('estoy en el componente par enviar el dinero')
    
  }

  ngOnDestroy(){
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
            this.userAccounts=this.userAccounts.filter((userAccount) => userAccount.userId === this.getallaccountsrv.idUser);
            console.log(this.userAccounts);
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
 
  onSelect(account: any){
    this.selectedaccount = account;
  }

imonto : Imonto;

  onSend(account: any){

   this.getallaccountsrv.sendMoney (account.id) 
console.log(account.id);

   const customHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.tokenservice.getToken}`,
  });

  return this.http.post(
    `${environment.API_URL}/accounts/${account.id}`,
    {
      "type": "topup" ,
      "concept": "padosss",
      "amount": 10000000
    },
    { headers: customHeaders }
  ).subscribe(
    (response: any) => {
      console.log(response)
  })

}
}


/*
{
      "type": "topup",
      "concept": "pagos",
      "amount": 15000
    }
    */




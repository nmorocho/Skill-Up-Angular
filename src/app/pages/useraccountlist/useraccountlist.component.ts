import { Component, OnInit } from '@angular/core';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';

@Component({
  selector: 'app-useraccountlist',
  templateUrl: './useraccountlist.component.html',
  styleUrls: ['./useraccountlist.component.scss']
})
export class UseraccountlistComponent implements OnInit {

  constructor(private getallaccountsrv:GetallaccountsService) { }
  public isLoading: boolean = true;
  public userAccounts: any[] = [];
  private contador: number = 1;

  ngOnInit(): void {
    this.searchAccounts();
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
          }
        },
        error: (error: Error) => {
          console.log(error);
          this.isLoading = false;
        },
      }
    )
  } 
}

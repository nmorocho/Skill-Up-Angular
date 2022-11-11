import { Component, OnInit } from '@angular/core';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-myaccountslist',
  templateUrl: './myaccountslist.component.html',
  styleUrls: ['./myaccountslist.component.scss']
})
export class MyaccountslistComponent implements OnInit {
  constructor(private userlistservice: GetallaccountsService, private userinfo: AuthService) { }
  accountList: any[] = [];
  contador: number = 1;
  userId: any;
  isLoading: boolean = true;
  accountListLoad: boolean = false;
  ngOnInit(): void {
    this.userinfo.viewProfile().subscribe({ next: data => this.userId = data.id })
    this.getAllUsers();
  }
  getAllUsers() {
    this.userlistservice.getTenAccounts(this.contador).subscribe(
      {
        next: (info) => {
          if (info.nextPage !== null) {
            this.accountList = [...this.accountList, ...info.data];
            this.contador++;
            this.getAllUsers();
          } else {
            this.accountList = this.accountList.filter(account => account.userId === this.userId);
            this.accountList.forEach((account, index, array) => {
              array[index] = { ...account, isSelected: false };
            });
            this.isLoading = false;
            this.accountListLoad = true;
          }
        },
        error: (error) => {
          console.log(error);
        },
      }
    )
  }
  setAccount(data: any) {
    if (this.accountList.some(accountList => accountList.isSelected === true)) {
      this.accountList.forEach((account, index, array) => { 
        if (account.isSelected) {
          array[index].isSelected = false;
        }
        if (account.id===data.id) {
          array[index].isSelected = true;
        }
      });
    } else {
      this.accountList.forEach((account, index, array) => {
        if (account.id === data.id) {
          array[index].isSelected = true;
        }
      });
    }
    localStorage.setItem('userAccountList',JSON.stringify(this.accountList)); 
  }
}

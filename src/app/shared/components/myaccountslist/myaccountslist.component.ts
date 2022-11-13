import { Component, OnInit } from '@angular/core';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-myaccountslist',
  templateUrl: './myaccountslist.component.html',
  styleUrls: ['./myaccountslist.component.scss']
})
export class MyaccountslistComponent implements OnInit {
  constructor(private getall: GetallaccountsService, private userinfo: AuthService) { }
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
    
    this.getall.getRelatedAccount().subscribe({
 
      next: data => {
        this.accountList = data;
        this.accountListLoad = true;
        this.isLoading= false;
      // console.log('>>>>>>',this.accountList,'<<<<<<<')
      }
    })
  }

  setAccount(idAccount: any) {

    localStorage.setItem('selectedAccount',JSON.stringify(idAccount)); 
  }
}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountUser, FixedDeposit } from 'src/app/core/interfaces/FixedDeposits';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }


  ngOnInit(): void {
  }

  pageNumber: number = 0;
  accountUser: AccountUser;
  tenAccountUsersResult: any[] = [];
  hide: boolean = false;


  previousPage() {
    this.pageNumber = this.pageNumber - 1;
    console.log(this.pageNumber)

    return this.http.get(
      `${environment.API_URL}/accounts/?page=${this.pageNumber}`)
      .subscribe((res) => {
        const result = Object.values(res).splice(2).flat().map(item => {
          return {
            id: item.id,
            creationDate: item.creationDate,
            money: item.money,
            isBlocked: item.isBlocked,
            userId: item.userId,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt
          }
        });

        this.tenAccountUsersResult.push(result)
        // this.tenAccountUsersResult = result;

        console.log('Listar todos los usuarios allTheUsers', this.tenAccountUsersResult);
      })
  }


  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    console.log(this.pageNumber)
    return this.http.get(
      `${environment.API_URL}/accounts/?page=${this.pageNumber}`)
      .subscribe((res) => {
        console.log(Object.values(res))
        const result = Object.values(res).flat(1).splice(2).flat().map(item => {
          return {
            id: item.id,
            creationDate: item.creationDate,
            money: item.money,
            isBlocked: item.isBlocked,
            userId: item.userId,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt
          }
        });

        this.tenAccountUsersResult = this.tenAccountUsersResult.concat(result)

        // this.tenAccountUsersResult = result;

        console.log('Listar todos los usuarios allTheUsers', this.tenAccountUsersResult);
      })
  }

  viewContact(user: AccountUser) {
  this.accountUser = user;
  const userId = user.userId;
  console.log(this.accountUser);
  this.hide = true;
  }

  close() {
    this.hide = false;
  }

  // Listar todas las cuentas

  listAllAccounts() {
    this.pageNumber = 0;
    while(this.pageNumber < 40)
    this.nextPage();
  }

  inputUserId: number = 0;
  userId: number[];

  filterAccountByUserId() {

    console.log(this.inputUserId)
    this.userId = this.tenAccountUsersResult.filter(item => item.userId === this.inputUserId);
    console.log(this.userId)
    return this.userId;
  }

}

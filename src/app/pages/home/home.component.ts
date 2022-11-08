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

        this.tenAccountUsersResult = result;

        console.log('Listar todos los usuarios allTheUsers', this.tenAccountUsersResult);
      })
  }


  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    console.log(this.pageNumber)
    return this.http.get(
      `${environment.API_URL}/accounts/?page=${this.pageNumber}`)
      .subscribe((res) => {
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

        this.tenAccountUsersResult = result;

        console.log('Listar todos los usuarios allTheUsers', this.tenAccountUsersResult);
      })
  }

  viewContact(user: AccountUser) {
  this.accountUser = user;
  console.log(this.accountUser);
  this.hide = true;
  }

  close() {
    this.hide = false;
  }

}

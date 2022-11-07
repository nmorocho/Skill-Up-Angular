import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  pageNumber: number = 1;


  toListAllAccounts() {
    return this.http.get(
    `${environment.API_URL}/accounts/?page=${this.pageNumber}`)
    .subscribe((res) => {
      console.log('Listar todas las cuentas', Object.values(res).flat(2));
    })
  }

  nextPages() {
    return this.http.get(
      `${environment.API_URL}/accounts/?page=${this.pageNumber}`)
      .subscribe((res) => {
        console.log('Listar todas las cuentas', Object.values(res).flat(2));
        const result = Object.values(res).flat(2);
        this.allTheUsers.push(result);
        console.log('Listar todos los usuarios allTheUsers', this.allTheUsers);
      })
  }

  allTheUsers: unknown[] = [];

  allAccounts() {
    while (this.pageNumber < 20) {
      this.pageNumber += 1;
      this.nextPages()
    }
  }


}

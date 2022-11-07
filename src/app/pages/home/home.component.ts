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
  allTheUsers: unknown[] = [];

  toListAllAccounts() {
    return this.http.get(
    `${environment.API_URL}/accounts/?page=${this.pageNumber}`)
    .subscribe((res) => {
      console.log('Listar todas las cuentas', Object.values(res).flat(2));
    })
  }


}

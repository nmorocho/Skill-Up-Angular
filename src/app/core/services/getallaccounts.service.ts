import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetallaccountsService {

  constructor(private http: HttpClient) { }

  public idUser: number | undefined;

  accountSelected: any;

  getTenAccounts(page: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/accounts?page=${page}`)
  }
  sendMoney(idCuenta: any): Observable<any> {
    return this.http.post(`${environment.API_URL}/accounts/`, idCuenta)

  }
}

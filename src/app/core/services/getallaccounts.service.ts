import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetallaccountsService {


  getAccountById(idAccount: undefined) {
  {
    return this.http.get(`${environment.API_URL}/users/${idAccount}`);
  }


  }
  idAccount: any;
  setAccount(account: any) {
    throw new Error('Method not implemented.');
  }

  token = environment.TOKEN_KEY;

  constructor(private http: HttpClient) { }

  public idUser: number | undefined;
  accountSelected: any;
  
  customHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });


  getTenAccounts(page: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/accounts?page=${page}`)
  }
  sendMoney(idCuenta: any): Observable<any> {
    return this.http.post(`${environment.API_URL}/accounts/`, idCuenta)
  }
    getRelatedAccount(): Observable<any> {
      return this.http.get(`${environment.API_URL}/accounts/me`, { headers: this.customHeaders })
    }

    
  }
  
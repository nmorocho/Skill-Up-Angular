import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetallaccountsService {
  constructor(private http: HttpClient) { }
  public idUser: number | undefined;
  getTenAccounts(page: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/accounts?page=${page}`)
  }
}

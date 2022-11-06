import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetallaccountsService {
  constructor(private http: HttpClient) { }
  private userAccounts: any[] = [];
  private contador: number = 1;
  private customHeaders = new HttpHeaders(
    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6NjgsInJvbGVJZCI6MX0sImlhdCI6MTY2Nzc1ODM1NywiZXhwIjoxNjY3ODQ0NzU3fQ.YiqHPBG92xJ0nN2C6Sy85sd6v3E0SqJuYes6Nzt6gww"
    });
  
  searchAccounts() {
    this.getTenAccounts(this.contador).subscribe(
      {
        next: (info: any) => {
          if (info.nextPage !== null) {
            this.userAccounts = [...this.userAccounts, ...info.data];
            this.contador++;
            this.searchAccounts();
          } else {
            console.log(this.userAccounts);
          }
        },
        error: (error: Error) => {
          console.log(error);
        },
      }
    )
  }
  getTenAccounts(page: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/accounts?page=${page}`, { headers: this.customHeaders })
  }
}

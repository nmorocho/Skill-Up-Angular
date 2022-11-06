import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetuserslistserviceService {
  constructor(private http: HttpClient) { }
  
  private customHeaders = new HttpHeaders(
    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6NjgsInJvbGVJZCI6MX0sImlhdCI6MTY2Nzc1ODM1NywiZXhwIjoxNjY3ODQ0NzU3fQ.YiqHPBG92xJ0nN2C6Sy85sd6v3E0SqJuYes6Nzt6gww"
    });
  getUserById(idUser: number) {
    return this.http.get(`${environment.API_URL}/users/${idUser}`, { headers: this.customHeaders })
  }
  getTenUsers(page: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/users?page=${page}`, { headers: this.customHeaders })
  }
  
}

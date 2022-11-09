import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetuserlistService {

  constructor(private http: HttpClient) { }
  
  getUserById(idUser: number) {
    return this.http.get(`${environment.API_URL}/users/${idUser}`);
  }
  getTenUsers(page: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/users?page=${page}`);
  }
}

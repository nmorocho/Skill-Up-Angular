import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../interfaces/UserDetails.interface';
import { SpinnerService } from './spinner.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor( private http: HttpClient,
    private tokenService: TokenService,
    private router: Router,
    private spinnerService: SpinnerService) { }


  token = this.tokenService.getToken();
  customHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });



  

  viewProfileTransaction(): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${environment.API_URL}/transactions`, {
      headers: this.customHeaders,
    });
  }
}

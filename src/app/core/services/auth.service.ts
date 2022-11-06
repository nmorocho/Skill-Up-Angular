import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  RegisterBodyUser,
  LoginBodyUser,
} from '../interfaces/UserCredentials.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../interfaces/ApiResponse.interface';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { UserDetails } from '../interfaces/UserDetails.interface';
import { SpinnerService } from 'src/app/spinner/spinner.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router,
    private spinnerService: SpinnerService
  ) {}

  createUser(user: RegisterBodyUser): Observable<any> {
    return this.http.post(`${environment.API_URL}/users`, user);
  }

  login(user: LoginBodyUser): Observable<any> {
    return this.http
      .post<LoginResponse>(`${environment.API_URL}/auth/login`, user)
      .pipe(
        map((res) => {
          this.tokenService.saveToken(res.accessToken);
          this.router.navigate(['home']);
        })
      );
  }

  logout(): void {
    this.spinnerService.callhide();
    this.tokenService.removeToken();
    this.router.navigate(['login']);
  }

  createAcount(token: string): Observable<any> {
    const customHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(
      `${environment.API_URL}/accounts`,
      {
        creationDate: new Date(),
        money: 0,
        isBlocked: false,
      },
      { headers: customHeaders }
    );
  }

  viewProfile(): Observable<UserDetails> {
    const token = this.tokenService.getToken();
    const customHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<UserDetails>(`${environment.API_URL}/auth/me`, {
      headers: customHeaders,
    });
  }
}

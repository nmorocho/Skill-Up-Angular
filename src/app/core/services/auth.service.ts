import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  RegisterBodyUser,
  LoginBodyUser,
} from '../interfaces/UserCredentials.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../interfaces/ApiResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  createUser(user: RegisterBodyUser): Observable<any> {
    return this.http.post(
      `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users`,
      user
    );
  }

  login(user: LoginBodyUser): Observable<any> {
    return this.http
      .post<LoginResponse>(
        `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login`,
        user
      )
      .pipe(
        map((res) => {
          this.saveToken(res.accessToken);
        })
      );
  }

  private saveToken(token: string) {
    localStorage.setItem('token', token);
  }
}

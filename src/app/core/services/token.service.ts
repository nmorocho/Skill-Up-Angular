import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  saveToken(token: string) {
    localStorage.setItem(environment.TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(environment.TOKEN_KEY);
  }

  removeToken() {
    localStorage.removeItem(environment.TOKEN_KEY);
  }
}

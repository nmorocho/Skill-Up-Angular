import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleLocalStorageService {


  usuarioData = new BehaviorSubject<any>(null);

  constructor() { }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage && localStorage.getItem(key));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }


  setUserAccount(value: string) {
    localStorage.setItem('userAccount', value);
  }

  getUserAccount() {
    return localStorage.getItem('userAccount');
  }

  setUserData(value: string) {
    localStorage.setItem('userData', value);
  }

  getUserData() {
    return localStorage.getItem('userData');
  }


  //solo borra datos del usuario y la cuenta referenciada
  cleardataWithoutLogout(){
    localStorage.removeItem('userAccount');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('userData');

  }

// deslogea y elimina todo
  clearDataOnLogOut() {
    localStorage.removeItem('userAccount');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  }


    addCartData(info: any) {
      localStorage.setItem('infoUsuario', JSON.stringify(info));
  
      const obj = JSON.parse(localStorage.getItem('cartData'));
  
      // checkea si el item esta vacio
      if (Object.keys(obj.response).length == 0) {
        this.cleardataWithoutLogout();
      }
  
      this.usuarioData.next(JSON.parse(this.getUserAccount()));
    }
}

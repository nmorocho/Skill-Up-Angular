import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleLocalStorageService {


  usuarioData = new BehaviorSubject<any>(null);

  constructor() {

  }

  setItem(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log('Error localstorage', error);
    }
  }

  getItem(key: string) {
    try {
      return JSON.parse(localStorage && localStorage.getItem(key));
    } catch (error) {
      console.log('Error localstorage', error);
    }
  }

  removeItem(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log('Failed to remove local storage', error);
    }
  }


  setUserAccount(value: string) {
    try {
    localStorage.setItem('userAccount', value);
  } catch (error) {
    console.log('Failed to set local storage', error);
  }

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
  cleardataWithoutLogout() {
    localStorage.removeItem('userAccount');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('userData');

  }

  // desloguea y elimina todo
  clearDataOnLogOut() {
    try {
      localStorage.clear();
    } catch (error) {
      console.log('Error clear localStorage', error);
    }
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

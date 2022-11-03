import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/i-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {



  constructor( 
    private http: HttpClient) {}
   


  createUser(user: IUser): Observable<any> {

    return this.http.post(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users`, user)
  }
}

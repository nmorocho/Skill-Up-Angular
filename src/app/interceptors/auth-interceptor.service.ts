import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {


  router: any;

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
    let request = req;

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {     
        alert('Usuario o contraseña incorrectos')    
        }
        else if (err.status === 403) {
          alert('No tiene permisos para acceso')
        }else if( err.status === 500){
          alert('Error en el servidor')
        }
        return throwError( err );

      })
    );
  }
}
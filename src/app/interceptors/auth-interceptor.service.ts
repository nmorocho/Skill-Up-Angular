import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpinnerService } from '../spinner/spinner.service';



@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  router: any;

  constructor(
    private spi : SpinnerService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spi.callshow();
    let request = req;


    return next.handle(request).pipe(

      
      catchError((err: HttpErrorResponse) => {
        this.spi.callhide();
        if (err.status === 401) {       
        alert('Usuario o contraseña incorrectos')    
        }
        else if (err.status === 403) {       
          alert('No tiene permisos para acceso')      
        }else if( err.status === 404){        
          alert('Recurso no encontrado') 
        }
        else if( err.status === 500){        
          alert('Error en el servidor') 
        }
        return throwError( err );

      })
    );
  }
}
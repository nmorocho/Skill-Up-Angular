import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpinnerService } from '../core/services/spinner.service';
import Swal from 'sweetalert2';



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

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrectos!',
          footer: '<a href="/password-reset">No recuerdas tu contraseña? </a>'
        })
        }
        else if (err.status === 403) {       
          Swal.fire('No tiene permisos para acceso')      
        }else if( err.status === 500){        
          Swal.fire('Error en el servidor') 
        }
        return throwError( err );

      })
    );
  }
}
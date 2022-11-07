import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserDetails } from 'src/app/core/interfaces/UserDetails.interface';
import { TokenService } from 'src/app/core/services/token.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

// USERS Listar todos los usuarios

usersList() {
  return this.http.get(`${environment.API_URL}/users`)
  .subscribe((res) => {
    console.log('Listar todos los usuarios', Object.values(res).flat(2));
  })
}

// USERS Ver detalle de un usuario

user: UserDetails;
userDetails: UserDetails;

viewUserDetail() {
  this.authService.viewProfile().subscribe((res: UserDetails) => {
    this.user = res;
    console.log('Ver detalle del usuario (solo necesito el id)', this.user.id);
  });
}

viewUserDetails() {
  this.authService.viewProfile().subscribe((res: UserDetails) => {
    this.user = res;
    console.log('Ver detalle del usuario (solo necesito el id)', this.user);
  });
}

// USERS Modificar un usuario existente

id: string = '';

changeUser(userId: string) {
  this.id = userId;
  const token = this.tokenService.getToken();
  const customHeaders = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.put<UserDetails>(`${environment.API_URL}/${this.id}`, {
    headers: customHeaders,
  });
}

// USERS Eliminar usuario

deleteUserById(userId: string) {
  this.id = userId;
  return this.http
    .delete(`${environment.API_URL}/${this.id}`);
}


// USERS Bloquear una cuenta del usuario

// USERS Desbloquear una cuenta del usuario

// USERS Resetear contraseña

// USERS Intercambiar puntos por un producto del catálogo

// ROLES Crear un rol

// ROLES Listar todos los roles

// ROLES Ver detalle de un rol

// ROLES Modificar un rol existente

// ROLES Eliminar un rol



// ACCOUNTS Crear una cuenta

// ACCOUNTS Listar todas las cuentas

pageNumber: number = 1;

toListAllAccounts() {
  return this.http.get(
    `${environment.API_URL}/accounts/?page=${this.pageNumber}`)
    .subscribe((res) => {
      console.log('Listar todas las cuentas', Object.values(res).flat(2));
    })
}

nextPage() {
  this.pageNumber += 1;
  return this.http.get(
    `${environment.API_URL}/accounts/?page=${this.pageNumber}`)
    .subscribe((res) => {
      console.log('Listar todas las cuentas', Object.values(res).flat(2));
    })
}

nextPages() {
  return this.http.get(
    `${environment.API_URL}/accounts/?page=${this.pageNumber}`)
    .subscribe((res) => {
      console.log('Listar todas las cuentas', Object.values(res).flat(2));
      const result = Object.values(res).flat(2);
      this.allTheUsers.push(result);
      console.log('Listar todos los usuarios allTheUsers', this.allTheUsers);
    })
}

allTheUsers: unknown[] = [];

allAccounts() {
  while (this.pageNumber < 20) {
    this.pageNumber += 1;
    this.nextPages()
  }
}

// allPages: unknown[] = [];

// listAllPages() {
//   this.pageNumber = 19;
//   while (this.pageNumber < 20) {
//     this.pageNumber += 1;
//     console.log('this.pagesNumber', this.pageNumber)

//     return this.http.get(
//       `${environment.API_URL}/accounts/?page=${this.pageNumber}`)
//       .subscribe((res) => {
//         const result = Object.values(res).flat(2);
//         this.allPages.push(result);
//         console.log('All pages', this.allPages);
//         console.log('Listar todas las cuentas', Object.values(res).flat(2));
//       })
//     }
//     console.log('this.allPages', this.allPages)
//     return this.pageNumber;
// }


// ACCOUNTS Depositar o transferir

// ACCOUNTS Ver detalle de una cuenta

accountId: number = 1;

viewAccountDetail() {
  this.accountId = Number(this.accountId);
  return this.http.get(
    `${environment.API_URL}/accounts/${this.accountId}`)
    .subscribe((res) => {
      console.log('Ver el detalle de una cuenta', Object.values(res).flat(2));
    })
}

// ACCOUNTS Modificar una cuenta existente

// ACCOUNTS Eliminar una cuenta



// TRANSACTIONS Crear una transaccion

// TRANSACTIONS Listar todas las transacciones del usuario

// TRANSACTIONS Ver detalle de una transaccion

// TRANSACTIONS Modificar una transaccion

// TRANSACTIONS Eliminar una transaccion



// FIXED TERM DEPOSITS Crear un depósito a plazo fijo



// FIXED TERM DEPOSITS Listar depósitos

// FIXED TERM DEPOSITS Ver detalle de un depósito

// FIXED TERM DEPOSITS Modificar un depósito a plazo fijo existente

// FIXED TERM DEPOSITS Eliminar un depósito a plazo fijo












}

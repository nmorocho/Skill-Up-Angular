import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { LoginComponent } from './pages/auth-login/login/login.component';
import { RegistroComponent } from './pages/auth-registro/registro/registro.component';
import { GastoFromRetirarComponent } from './pages/gastos/gasto-from-retirar/gasto-from-retirar.component';
import { HomeComponent } from './pages/home/home.component';
import { PlazoFijoComponent } from './pages/inversiones/plazo-fijo/plazo-fijo.component';
import { MovimientoListComponent } from './pages/movimientos/movimiento-list/movimiento-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { SendmoneyComponent } from './pages/sendmoney/sendmoney.component';
import { TransactionListComponent } from './pages/transactions/transaction-list/transaction-list.component';
import { UseraccountlistComponent } from './pages/useraccountlist/useraccountlist.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistroComponent,
  },
  {
    path: 'my-profile',
    component: UserDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'usuarios-list',
    component: SendmoneyComponent,
  },
  {
    path: 'enviar-divisas',
    component: UseraccountlistComponent,
  },
  
  {
    path: 'plazo-fijo',
    component: PlazoFijoComponent
  },
  {
    path: 'actividad',
    component: MovimientoListComponent
  },
  {
    path: 'contactos',
    component: UseraccountlistComponent
  },
  {
    path: 'cuentas',
    component: AccountsComponent
  },
  {
    path: 'gastos/extracciones',
    component: GastoFromRetirarComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

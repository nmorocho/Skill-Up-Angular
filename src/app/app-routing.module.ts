import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/auth-login/login/login.component';
import { RegistroComponent } from './pages/auth-registro/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { SendmoneyComponent } from './pages/sendmoney/sendmoney.component';
import { UseraccountlistComponent } from './pages/useraccountlist/useraccountlist.component';

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
    path: 'usuarios',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'usuarios-list',
        component: SendmoneyComponent
      },
      {
        path: 'enviar-divisas',
        component: UseraccountlistComponent
      }
    ]
  },
  {
    path: 'register',
    component: RegistroComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

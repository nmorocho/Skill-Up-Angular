import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: LoginComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: HomeComponent,
  //       canActivate: [AuthGuard]
  //     },
  //     {
  //       path: '**',
  //       redirectTo: '/home',
  //       pathMatch: 'full'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLoginRoutingModule { }

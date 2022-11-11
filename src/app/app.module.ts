import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { AuthRegistroModule } from './pages/auth-registro/auth-registro.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLoginModule } from './pages/auth-login/auth-login.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { PasswordResetComponent } from './pages/auth-password-reset/password-reset/password-reset.component';
import { TransactionListComponent } from './pages/transactions/transaction-list/transaction-list.component';
import { TransactionEditComponent } from './pages/transactions/transaction-edit/transaction-edit.component';
import { TransactionFilterComponent } from './pages/transactions/transaction-filter/transaction-filter.component';
import { DivisasComponent } from './pages/divisas/divisas.component';
import { PlazoFijoComponent } from './pages/inversiones/plazo-fijo/plazo-fijo.component';
import { PlazoFijoProyeccionComponent } from './pages/inversiones/plazo-fijo-proyeccion/plazo-fijo-proyeccion.component';
import { NumbersDirective } from './directives/numbers.directive';
import { SendmoneyComponent } from './pages/sendmoney/sendmoney.component';
import { UseraccountlistComponent } from './pages/useraccountlist/useraccountlist.component';
import { BalanceInfoComponent } from './pages/balances/balance-info/balance-info.component';
import { MovimientoListComponent } from './pages/movimientos/movimiento-list/movimiento-list.component';
import { AccountsComponent } from './pages/accounts/accounts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailsComponent,
    PasswordResetComponent,
    TransactionListComponent,
    TransactionEditComponent,
    TransactionFilterComponent,
    DivisasComponent,
    PlazoFijoComponent,
    PlazoFijoProyeccionComponent,
    NumbersDirective,
    SendmoneyComponent,
    UseraccountlistComponent,
    BalanceInfoComponent,
    MovimientoListComponent,
    AccountsComponent],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthRegistroModule,
    AuthLoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

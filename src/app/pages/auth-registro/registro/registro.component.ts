import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  LoginBodyUser,
  RegisterBodyUser,
} from 'src/app/core/interfaces/UserCredentials.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  _iUser: RegisterBodyUser;
  signUpForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signUpForm = new FormGroup({
      last_name: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSignUp() {
    this._iUser = {
      ...this.signUpForm.value,
      roleId: 2,
      points: 1,
    };

    this.authService.createUser(this._iUser).subscribe({
      next: (userResponse: RegisterBodyUser) => {
        const userCredentials: LoginBodyUser = {
          email: this.signUpForm.value.email,
          password: this.signUpForm.value.password,
        };
        this.authService.login(userCredentials).subscribe({
          next: (token: string) => {
            this.authService.createAcount(token).subscribe({
              next: (data: any) => {
                this.router.navigate(['/home']);
              },
              error: (error) => {
                console.log(error);
              },
            });
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

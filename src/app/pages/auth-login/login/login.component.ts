import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { SpinnerService } from 'src/app/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  onLogin() {
    this.authService.login(this.loginForm.value).subscribe();
  }

  controlIsValid(control: string): boolean {
    return !(
      this.loginForm.get(control).touched &&
      this.loginForm.get(control).invalid &&
      this.loginForm.get(control).dirty
    );
  }
}

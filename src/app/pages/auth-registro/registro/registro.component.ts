import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/core/interfaces/i-user';
import { RegisterServiceService } from 'src/app/core/services/register-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {


  _iUser: IUser;
  
  name: string;
  email: string;
  password: string;

  public signUpForm : FormGroup;
  constructor( private regis: RegisterServiceService
   
  ) {  
   }

  ngOnInit(): void {

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

  onSignUp(){

    this._iUser = {
      ...this.signUpForm.value,
       roleId: 2,
       points: 1
    }
 
    this.regis.createUser(this._iUser).subscribe({
      next: (data) => {
        console.log(data)
      }
    });
  }
}

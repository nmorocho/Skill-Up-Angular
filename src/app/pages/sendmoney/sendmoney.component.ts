import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';
import { GetuserslistserviceService } from 'src/app/core/services/getuserslistservice.service';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.scss']
})
export class SendmoneyComponent implements OnInit {
  constructor(
    private userlistservice: GetuserslistserviceService,
    private router: Router,private getallaccountsrv:GetallaccountsService
    ) { }
  public searchUsersForm: FormGroup;
  public isLoading: boolean = false;
  public userList: any[] = [];
  public isDisabledPrevious: boolean = true;
  public isDisabledNext: boolean = false;
  private contador: number = 1;

  ngOnInit(): void {
    this.searchUsersForm = new FormGroup({
      userId: new FormControl('')
    });
  }
  searchUser() {
    this.isLoading = true;
    this.userlistservice.getUserById(this.searchUsersForm.value.userId).subscribe({
      next: (dataUser) => {
        this.userList = [dataUser];
        
        this.searchUsersForm.reset();
        this.isLoading = false;
        console.log(this.userList);
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
        this.searchUsersForm.reset();
        this.userList = [];
       
      }
    })
  }
  getTenUsers() {
    this.contador = 1;
    this.userlistservice.getTenUsers(this.contador).subscribe({
      next: (users) => {
        this.userList = users.data;
        console.log(this.userList);
      },
      error: (error) => console.log(error)
    })
  }
  getAllUsers() {
    this.isLoading = true;
    this.searchUsersForm.reset();
    this.userlistservice.getTenUsers(this.contador).subscribe(
      {
        next: (info) => {
          if (info.nextPage !== null) {
            this.userList = [...this.userList, ...info.data];
            this.contador++;
            this.getAllUsers();
            this.searchUsersForm.reset();
            console.log(this.userList);
          } else {
            this.isLoading = false;
            console.log(this.userList);
          }
        },
        error: (error) => {
          console.log(error);
          this.searchUsersForm.reset();
          this.isLoading = false;
        },
      }
    )
  }
  previousPage() {
    if (this.contador <= 1) {
      this.isDisabledPrevious = true;
    } else {
      this.contador--;
      this.isDisabledNext = false;
      this.userlistservice.getTenUsers(this.contador).subscribe({
        next: (users) => {
          this.userList = users.data;
        },
        error: (error) => console.log(error)
      })
    }
  }
  nextPage() {
    this.contador++;
    this.isDisabledPrevious = false;
    this.userlistservice.getTenUsers(this.contador).subscribe({
      next: (users) => {
        if (users.nextPage === null) {
          this.isDisabledNext = true;
        }
        this.userList = users.data;
      },
      error: (error) => console.log(error)
    })
  }
  
  getUser( id: number) {
    this.router.navigate(['enviar-divisas']);
    this.getallaccountsrv.idUser = id
  }
}

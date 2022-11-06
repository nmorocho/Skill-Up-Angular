import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';
import { GetuserslistserviceService } from 'src/app/core/services/getuserslistservice.service';
import { SpinnerService } from 'src/app/spinner/spinner.service';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.scss']
})
export class SendmoneyComponent implements OnInit {
  constructor(
    private userlistservice: GetuserslistserviceService, 
    private allacountservice: GetallaccountsService) { }
  public searchUsersForm: FormGroup;
  public isLoading: boolean = false;
  public userList: any[] = [];
  
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
        this.allacountservice.searchAccounts();
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
        this.searchUsersForm.reset();
      }
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
          } else {
            this.allacountservice.searchAccounts();
            this.isLoading = false;
          }
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          this.searchUsersForm.reset();
        },
      }
    )
  }
}

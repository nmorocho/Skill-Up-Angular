import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetuserslistserviceService } from 'src/app/core/services/getuserslistservice.service';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.scss']
})
export class SendmoneyComponent implements OnInit {
  constructor(private userlistservice: GetuserslistserviceService) { }

  searchUsersForm: FormGroup;
  userList: any[] = [];
  private contador: number = 1;
  public isLoading: boolean = false;
  
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
        this.isLoading = false;
      },
      error: (error) => console.log(error)
    })
  }
  
  getAllUsers() {
    this.isLoading = true;
    this.userlistservice.getTenUsers(this.contador).subscribe(
      {
        next: (info) => {
          if (info.nextPage !== null) {
            this.userList = [...this.userList, ...info.data];
            this.contador++;
            this.getAllUsers();
          }else{
            this.isLoading = false;
          }
        },
        error: (error) => console.log(error),
      }
    )
  }
}

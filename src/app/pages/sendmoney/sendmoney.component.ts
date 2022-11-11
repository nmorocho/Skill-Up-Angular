import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';
import { GetuserlistService } from 'src/app/core/services/getuserlist.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.scss'],

})
export class SendmoneyComponent implements OnInit {


  public searchUsersForm: FormGroup;

  public userList: any[] = [];
  public isDisabledPrevious: boolean = true;
  public isDisabledNext: boolean = false;
  private contador: number = 1;

  
  constructor(
    private userlistservice: GetuserlistService,
    private router: Router,private getallaccountsrv:GetallaccountsService,
    private spin: SpinnerService
  ) { }

  ngOnInit(): void {
    
    this.searchUsersForm = new FormGroup({
      userId: new FormControl('')
    });
    console.log('estoy en el compoenete de listas')
  }
 

  public showSpinner() {
    this.spin.callshow();
  }



  searchUser() {
   
   
    this.userlistservice.getUserById(this.searchUsersForm.value.userId).subscribe({
      next: (dataUser) => {
        this.userList = [dataUser];
        
        this.searchUsersForm.reset();
  
        console.log(this.userList);
        this.spin.callhide()

      },
      error: (error) => {
        console.log(error);
        
        this.searchUsersForm.reset();
        this.userList = [];
        this.spin.callhide();
      }
    })
  }

  
  getTenUsers() {


    this.contador = 1;
    this.userlistservice.getTenUsers(this.contador).subscribe({
      next: (users) => {
        this.userList = users.data;
        console.log(this.userList);
        this.spin.callhide();
      },
      error: (error) => console.log(error)
      
    })
    
  }
  getAllUsers() {
    
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
                 
            console.log(this.userList);
            this.spin.callhide();
          }
        },
        error: (error) => {
          console.log(error);
          this.searchUsersForm.reset();
          
      
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
          this.spin.callhide();
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
        this.spin.callhide();
      },
      error: (error) => console.log(error)
    })
  }
     
  getUser( id: number) {

    this.getallaccountsrv.idUser = id
    this.router.navigate(['enviar-divisas']);
    this.spin.callshow();


  

}  

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-useraccountlist',
  templateUrl: './useraccountlist.component.html',
  styleUrls: ['./useraccountlist.component.scss']
})
export class UseraccountlistComponent implements OnInit {

  constructor(private getallaccountsrv:GetallaccountsService,
    private router: Router,
    private spi : SpinnerService) { }
  public isLoading: boolean = true;
  public userAccounts: any[] = [];
  private contador: number = 1;

  ngOnInit(): void {
    this.searchAccounts();
    console.log('estoy en el componente par enviar el dinero')
    
  }

  ngOnDestroy(){
    this.spi.callhide();
    this.router.navigate(['usuarios-list']);
    
  }

  searchAccounts() {
  
    this.getallaccountsrv.getTenAccounts(this.contador).subscribe(
      {
        
        next: (info: any) => {
          if (info.nextPage !== null) {
            this.userAccounts = [...this.userAccounts, ...info.data];
            this.contador++;
            this.searchAccounts();

          } else {
            
            this.userAccounts=this.userAccounts.filter((userAccount) => userAccount.userId === this.getallaccountsrv.idUser);
            console.log(this.userAccounts);
            this.isLoading = false;
            

            this.spi.callhide();
          }
        },
        error: (error: Error) => {
          console.log(error);
          this.isLoading = false;
        },
      }
    )
  } 
}



import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetallaccountsService } from 'src/app/core/services/getallaccounts.service';

@Component({
  selector: 'app-carduserdetail',
  templateUrl: './carduserdetail.component.html',
  styleUrls: ['./carduserdetail.component.scss']
})
export class CarduserdetailComponent implements OnInit {

  constructor(private router: Router,private getallaccountsrv:GetallaccountsService) { }
  @Input() detailUser: any
  ngOnInit(): void {
  }
  showDetailAccounts() {
    this.router.navigate(['usuarios/enviar-divisas']);
    this.getallaccountsrv.idUser = this.detailUser.id
  }

}

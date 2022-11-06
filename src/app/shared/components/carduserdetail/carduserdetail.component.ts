import { Component, Input, OnInit } from '@angular/core';
import { RegisterBodyUser } from 'src/app/core/interfaces/UserCredentials.interface';

@Component({
  selector: 'app-carduserdetail',
  templateUrl: './carduserdetail.component.html',
  styleUrls: ['./carduserdetail.component.scss']
})
export class CarduserdetailComponent implements OnInit {

  constructor() { }
  @Input() detailUser: RegisterBodyUser;
  ngOnInit(): void {
  }
  showDetailAccounts() {
    console.log(this.detailUser);
  }

}

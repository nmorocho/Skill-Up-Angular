import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { OperationsService } from 'src/app/core/services/operations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private opera: OperationsService
  ) { }


  ngOnInit(): void {
    this.opera.viewProfileTransaction().subscribe((res) => {
      console.log(res)})
  }


}

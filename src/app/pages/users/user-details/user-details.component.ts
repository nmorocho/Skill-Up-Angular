import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user = {
    first_name: 'Nahuel',
    last_name: 'Morocho',
    email: 'nahuelmorocho@gmail.com',
    password: 'abc123',
    roleId: 2,
    points: 50,
  };

  constructor() {}

  ngOnInit(): void {}
}

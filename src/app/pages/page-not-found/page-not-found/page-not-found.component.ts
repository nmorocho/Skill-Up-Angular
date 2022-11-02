import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  notFoundImg = 'https://static.platzi.com/media/user_upload/7-404-3a5cf5d1-83a2-4699-af06-759cb123ffc9.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}

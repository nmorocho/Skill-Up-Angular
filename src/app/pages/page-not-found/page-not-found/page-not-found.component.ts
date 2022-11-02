import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<div><img src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif"></div>`,
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  notFoundImg = 'https://static.platzi.com/media/user_upload/7-404-3a5cf5d1-83a2-4699-af06-759cb123ffc9.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/core/interfaces/UserDetails.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: UserDetails;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.viewProfile().subscribe((res: UserDetails) => {
      this.user = res;
    });
  }
}

import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  public isLoading: boolean = false;
  public userId: any = null;
  public userDetails: any = null;
  public userDetailsFromState: any = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
    private location: Location
  ) {
    const user = this.activatedRoute.snapshot.paramMap.get('id');

    // Get user information from state
    this.userDetailsFromState = this.location.getState();
    this.userDetails = this.userDetailsFromState.userInfo;
    this.userId = user;
    console.log('this.userDetailsFromState', this.userDetailsFromState);
  }

  ngOnInit() {
    // Get user details from navigation id
    // this.getUserDetails(this.userId);

    // Get active routes url
    const activeRoutesUrl = this.router.routerState.snapshot;
    console.log('activeRoutesUrl', activeRoutesUrl);
  }

  // Get user details
  getUserDetails(userId: number) {
    this.isLoading = true;
    this.userService.getUserDetails(userId).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('User Details', response);
        this.userDetails = response;
      },
    });
  }
}

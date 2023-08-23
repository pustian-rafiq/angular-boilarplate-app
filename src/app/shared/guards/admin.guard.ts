import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AdminGuard {
  constructor(
    private router: Router,

    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    const authToken = this.authService.getToken();

    if (authToken) {
      return true;
    }

    this.router.navigate(['/auth/login']);
    return false;
  }
}

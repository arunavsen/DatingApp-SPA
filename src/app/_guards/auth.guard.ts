import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyServiceService } from '../_services/AlertifyService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyServiceService
  ){}
  canActivate(): boolean {
    if(this.authService.loggedIn()){
    return true;
    }

    this.alertify.error('You shall not pass!!!');
    this.router.navigate(['/home']);
    return false;
  }
}

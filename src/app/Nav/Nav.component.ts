import { Component, OnInit } from '@angular/core';
import { AlertifyServiceService } from '../_services/AlertifyService.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
  model : any = {};

  constructor(private authService: AuthService, private alertify: AlertifyServiceService) { }

  ngOnInit() {
  }

  login(){    
    this.authService.login(this.model).subscribe(result => {
      this.alertify.success('Logged in successfully');
    }, error =>{
      this.alertify.error('Failed to Log in');
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logOut(){
    localStorage.removeItem('token');
    this.alertify.message('Logged out successfully');;
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp-SPA';
  jwthelper = new JwtHelperService();

  constructor(private authService: AuthService) { }

  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token){
      this.authService.decodedText = this.jwthelper.decodeToken(token); // We are using this because we will get token while we login. But if we refresh after login, that time we have no token to get. SO that we can get the token, we have write it on here. because app.component.ts will load in every refresh.
    }
  }
}

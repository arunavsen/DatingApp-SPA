import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseurl = 'http://localhost:5010/auth/';
jwtHelper = new JwtHelperService();
decodedText: any;

constructor(private http: HttpClient) { }

login(model:any){
  return this.http.post(this.baseurl + 'login',model,).pipe(
    map((response: any) => {
      const user = response;
      if(user){
        localStorage.setItem('token',user.token);
        this.decodedText = this.jwtHelper.decodeToken(user.token);
        return this.decodedText;
      }
    })
  );
}

register(model : any){
  return this.http.post(this.baseurl + 'register', model);
}

loggedIn(){
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}

}

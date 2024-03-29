import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseurl = environment.apiUrl + 'auth/';
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseurl = 'http://localhost:5010/Auth/login';

constructor(private http: HttpClient) { }

login(model:any){
  this.http.post(this.baseurl, model).pipe(
    map(
        (response: any) => {
          const user = response;
          if(user)
          {
            localStorage.setItem('token',user.token);
          }
        }
     )
  );
}

}

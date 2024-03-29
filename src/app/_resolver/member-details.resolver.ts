import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Route, Router, RouterStateSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { AlertifyServiceService } from "../_services/AlertifyService.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class MemberDetailsResolver implements Resolve<User>{
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyServiceService){}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/members']);
                return of(null);
            })
        )
    }
}
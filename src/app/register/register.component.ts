import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertifyServiceService } from '../_services/AlertifyService.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() values_To_Home = new EventEmitter();
  model : any = {};
  
  constructor(private authService: AuthService, private alertifyService: AlertifyServiceService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(()=>{
      this.alertifyService.success('Registration successfully done');
    }, error => {
      this.alertifyService.error(error);
    })
  }

  cancel(){
    this.values_To_Home.emit(false);
    console.log("Cancelled");
  }

}

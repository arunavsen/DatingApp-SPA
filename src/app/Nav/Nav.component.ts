import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
  model : any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){    
    this.authService.login(this.model).subscribe(result => {
      console.log('Successful');
    }, error =>{
      console.log('Unsuccessful');
    });
  }

}

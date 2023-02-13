import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values : any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  registerToggle(){
    debugger
    this.registerMode = true;
  }

  getValues(){
    this.http.get('http://localhost:5010/values').subscribe(result => {
      this.values = result;
    }, error => {
        console.log(error);
    })
  }

  cancelRegisterMode(value : boolean){
    this.registerMode = value;
  }

}

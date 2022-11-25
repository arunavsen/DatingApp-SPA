import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.http.get('http://localhost:5010/Animal').subscribe(result => {
      this.values = result;
    }, error => {
        console.log(error);
    })
  }
}

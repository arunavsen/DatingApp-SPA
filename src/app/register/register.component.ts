import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() values_From_Home : any;
  @Output() values_To_Home = new EventEmitter();
  model : any = {};
  
  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.model);
  }

  cancel(){
    this.values_To_Home.emit(false);
    console.log("Cancelled");
  }

}

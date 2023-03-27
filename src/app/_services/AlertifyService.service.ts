import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyServiceService {

constructor() { }

confirm(messege: string, okcallback: () => any){
  alertify.confirm(messege, (e: any) => {
    if(e){
      okcallback();
    }else{}
  });
}

success(messege: string){
  alertify.success(messege);
}
  
error(messege: string){
  alertify.error(messege);
}

message(msg: string){
  alertify.message(msg);
}
}

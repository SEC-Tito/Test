import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
num1:number=0;
num2:number=0;
result:number;
  constructor() {
    this.num1=0;
    this.num2=0
    this.result=0
  }
/*
   add(a:number,b:number):void {
   this.result=a+b;
  }
  */

  add(a:number,b:number):number{
    return a+b;
  }
subtract(a:number,b:number):number{
  return a-b;
   }
   multiply(a:number,b:number):number {
    return a*b;
   }
   divide(a:number,b:number):number {
    return a/b;
   }
  
}

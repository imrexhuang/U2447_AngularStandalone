import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  public a : string;

  constructor() {
    this.a = '注入練習Service1';
   }
}

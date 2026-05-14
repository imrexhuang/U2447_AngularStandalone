import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnToWebAPIService {
  http=inject(HttpClient);
  rootUrl="http://localhost:5046/wf";
  constructor() { }

  // GetSummary(id:number){

  //   //使用HttpClient連到目的端
  //   this.http.get(`${this.rootUrl}/${id}`,{responseType:'text'})
  //     .subscribe( (data)=>{
  //       console.log(data);
  //     });
  // }

  GetSummary(id:number){

    return  this.http.get(`${this.rootUrl}/${id}`,{responseType:'text'});
  
  }
    
}

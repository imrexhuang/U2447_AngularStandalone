import { Component, inject } from '@angular/core';
import { ConnToWebAPIService } from './conn-to-web-api.service';
import { WeatherForecast } from './weather-forecast';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-part2',
  imports: [],
  templateUrl: './part2.component.html',
  styles: ``
})
export class Part2Component {
  connToAPI = inject(ConnToWebAPIService); //inject
  summary:string="";

    GetSummary(id:string){
      if (!Number(id)){
        alert("請輸入數字");
        return;
      }
      // this.connToAPI.GetSummary(Number(id)).subscribe((data)=>{
      //   this.summary=data;
      // });
      this.connToAPI.GetSummary(Number(id)).subscribe({
        next:(data)=>{
          this.summary=data;
        },
        error:(err)=>{
          this.summary="發生錯誤:"+err.message;
        }
      } );
    }

    //補充教材 p.81 , LAB03
    wfList: WeatherForecast[] = [];
  	GetWeatherForecast() {
    	this.connToAPI.GetWeatherForecast().subscribe({
      next: resp => this.wfList = resp,
      error: error => console.log(error)
    	});
  }    

}

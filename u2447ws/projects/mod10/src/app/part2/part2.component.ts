import { Component, inject } from '@angular/core';
import { ConnToWebAPIService } from './conn-to-web-api.service';

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
    this.connToAPI.GetSummary(Number(id));
  }
}

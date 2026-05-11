import { Component } from '@angular/core';

@Component({
  selector: 'uuu-content2',
  imports: [],
  templateUrl: './content2.component.html',
  styles: ``
})
export class Content2Component {
  countries = ['All', 'Canada', 'USA', 'UK', 'India', 'Japan'];

  db=[
    {name:'John', country:'USA', age: 30},
    {name:'Jane', country:'UK', age: 25},
    {name:'Bob', country:'Canada', age: 35},
    {name:'Alice', country:'India', age: 28},
    {name:'Tom', country:'Japan', age: 32}, 
    {name:'Sara', country:'USA', age: 27},
    {name:'Mike', country:'UK', age: 40},
    {name:'Emily', country:'Canada', age: 22},
    {name:'David', country:'India', age: 31},
    {name:'Anna', country:'Japan', age: 29}      
  ]
  member = this.db;

  country="UK";

  onchangeABC(value: string) {
    this.country = value;
    if (value==="All"){
      this.member= this.db;
      return;
    }
    this.member = this.db.filter((m)=> m.country===value);    
  }


}

import { CommonModule  } from '@angular/common';
import { Component } from '@angular/core';
import { Usd2ntdPipe } from '../usd2ntd.pipe';

@Component({
  selector: 'app-lab07',
  imports: [CommonModule, Usd2ntdPipe],
  templateUrl: './lab07.component.html',
  styles: ``
})
export class Lab07Component {
  vDate = new Date();
  vString = "This is a book";
  vMoney = 10000;
  vNumber = 27.72;
  vNumber2 = 31.13;
  vPercent = 10;

}

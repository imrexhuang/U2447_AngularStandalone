import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd2ntd' //名稱
})
export class Usd2ntdPipe implements PipeTransform {

   //轉換前型別 : 轉換後型別 
  transform(value: number): number {
    return value *32; //假設匯率
  }

}

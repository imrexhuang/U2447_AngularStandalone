import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd2ntd'
})
export class Usd2ntdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

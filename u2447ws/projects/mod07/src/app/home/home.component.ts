import { CurrencyPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'uuu-home',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  price = signal<number>(5);
  qty = signal<number>(10);
  total = computed(()=>this.price() * this.qty());

  changePrice() {
    this.price.set(Math.floor(Math.random() * 1000));
  }
  addQty() {
    this.qty.update((v) => v + 1);
  }
  minusQty() {
    this.qty.update((v) => v - 1);
  }


  constructor(){

    //price和qty同時一起通知
    // effect(()=> 
    // {
    //   console.log("price", this.price());
    //   console.log("qty", this.qty());
    // });


    //price和qty分開個別通知
    effect(() => {
      console.log('price', this.price());
    });

    effect(() => {
      console.log('qty', this.qty());
    });

  }

}

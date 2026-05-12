import { CurrencyPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

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

}

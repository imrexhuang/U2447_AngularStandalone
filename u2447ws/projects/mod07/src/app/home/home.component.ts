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
}

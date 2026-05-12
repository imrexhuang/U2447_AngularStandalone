import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content3',
  imports: [FormsModule],
  templateUrl: './content3.component.html',
  styles: ``
})
export class Content3Component {
 choice = 1;
  courses = [
    { 'id': 1, 'name': 'Angular' },
    { 'id': 2, 'name': 'React' },
    { 'id': 3, 'name': 'Vue' },
    { 'id': 4, 'name': '.NET MAUI' }
  ];
}

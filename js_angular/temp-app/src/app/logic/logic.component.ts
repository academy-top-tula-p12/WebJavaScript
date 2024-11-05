import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logic',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logic.component.html',
  styleUrl: './logic.component.css'
})
export class LogicComponent {
  count = 10;

  a = 0;
  b = 0;
  sign = "+";

  names = ["Bobby", "Tommy", "Sammy", "Kenny"];
}

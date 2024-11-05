import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-derect-class',
  standalone: true,
  imports: [NgClass,
            FormsModule,
            NgIf,
            NgFor],
  templateUrl: './derect-class.component.html',
  styleUrl: './derect-class.component.css'
})
export class DerectClassComponent {
  isRed: boolean = true;
  isBlue: boolean = true;
  isItalic: boolean = true;
  isBold: boolean = true;

  cities = ["Moscow", "Kazan", "Novosibirsk"];

  isClasses = {
    red_text: this.isRed,
    italic_text: this.isItalic,
    bold_text: this.isBold,
  };

  changeClass(){
    this.isClasses = {
      red_text: this.isRed,
      italic_text: this.isItalic,
      bold_text: this.isBold,
    };
  }
}

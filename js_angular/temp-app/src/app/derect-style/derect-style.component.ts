import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-derect-style',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './derect-style.component.html',
  styleUrl: './derect-style.component.css'
})
export class DerectStyleComponent {
  myStyle = {
    "font-family": 'Calibri',
    "color": "green"
  }

  addFontSize(){
    this.myStyle = Object.assign(this.myStyle, {"font-size": "30px"});
  }
}

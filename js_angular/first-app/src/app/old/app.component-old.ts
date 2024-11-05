import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  // template: `<h1>Good by world!</h1>
  //            <h2>Hello {{name}}</h2>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "first app";
  name: string = "Maxim";
  counter: number = 0;

  isColor: boolean = true;

  counterInc($event: any): void{
    this.counter++;
    console.log($event);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogicComponent } from './logic/logic.component';
import { DerectClassComponent } from './derect-class/derect-class.component';
import { DerectStyleComponent } from './derect-style/derect-style.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            FormsModule,
            LogicComponent,
            DerectClassComponent,
            DerectStyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temp-app';
  
}

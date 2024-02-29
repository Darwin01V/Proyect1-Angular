import { Component } from '@angular/core';
import { TituloComponent } from './titulo/titulo.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TituloComponent,BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

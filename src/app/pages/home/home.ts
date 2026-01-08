import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  fotos = Array.from({ length: 8 }, (_, i) => i + 1); 
}

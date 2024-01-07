import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  urlImage: string = '../../assets/squirlte.png';
  name: string = 'Squirtle';
  statsTypes: string[] = ['Aqua', 'Poison'];
}

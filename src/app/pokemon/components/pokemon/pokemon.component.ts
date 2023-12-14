import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input()
  public pokemon:Pokemon={
    nombre:"",
    habilidades:[{habilidad:"",url:""}],
    experiencia_base:0,
    imagen:"",
    peso:0
  };

}

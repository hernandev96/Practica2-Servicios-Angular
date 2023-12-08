import { Component, EventEmitter, Output } from '@angular/core';
import { Busqueda } from '../../interfaces/Busqueda.interface'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  public pokemon:Busqueda={
    nombre:"",
  };

  @Output()
  BuscarPokemon:EventEmitter<Busqueda> = new EventEmitter();

  consultarPokemon():void{
    if(this.pokemon.nombre.length===0)return;
    console.log(this.pokemon);
    this.BuscarPokemon.emit({...this.pokemon});
    this.pokemon.nombre="";
  }
}

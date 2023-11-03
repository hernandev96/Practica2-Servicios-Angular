import { Component, EventEmitter, Output } from '@angular/core';
import { buscar } from '../../interfaces/buscar.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  public pokemon:buscar={
    nombre:"",
  };

  @Output()
  BuscarPokemon:EventEmitter<buscar> = new EventEmitter();

  consultarPokemon():void{
    if(this.pokemon.nombre.length===0)return;
    console.log(this.pokemon);
    this.BuscarPokemon.emit({...this.pokemon});
    this.pokemon.nombre="";
  }
}

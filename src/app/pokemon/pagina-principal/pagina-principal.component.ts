import { Component, EventEmitter, Output } from '@angular/core';

import { Pokemon } from '../interfaces/Pokemon.interface';
import { Habilidad } from '../interfaces/Habilidad.interface';

import { ApiService } from 'src/app/service/api.service';
import { Busqueda } from '../interfaces/Busqueda.interface';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {
  public habilidades:Habilidad={
    habilidad:"",
    url:""
  };

  public pokemon:Pokemon={
    nombre:"",
    habilidades:[this.habilidades],
    experiencia_base:0,
    imagen:"",
    peso:0
  }
  data: {}={};
  constructor(private apiservice:ApiService){}

  @Output()
  traerDatos: EventEmitter<Pokemon>=new EventEmitter();



  obtenerDatos(pokemon:Busqueda):void{
    console.log("Estoy en main-page componente me llego el pokemon:"+pokemon.nombre);
    this.apiservice.getPokemon(pokemon).subscribe(data=>{
      this.data=data;
      console.log(this.data);
      let jsonData=JSON.stringify(this.data);
      let dataObject=JSON.parse(jsonData);
      console.log(dataObject);
      this.pokemon={
        nombre:"",
        habilidades:[this.habilidades],
        experiencia_base:0,
        imagen:"",
        peso:0
      }
      this.pokemon.nombre=dataObject.name;
      this.pokemon.peso=dataObject.weight;
      this.pokemon.experiencia_base=dataObject.base_experience;
      for(let i=0;i< dataObject.abilities.length;i++){
        this.pokemon.habilidades.push({
          habilidad:dataObject.abilities[i].ability.name,
          url:dataObject.abilities[i].ability.url
        });

      }
      // Se elimina la primera habilidad ya que al costruir la variable pokemon
      // se añade una habilidad vacia
      this.pokemon.habilidades.shift();
      // Se guarda el url de la imagen del pokemon
      this.pokemon.imagen=dataObject.sprites.front_default;


    });

  }


}



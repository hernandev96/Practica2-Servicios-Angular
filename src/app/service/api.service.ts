import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Busqueda } from '../pokemon/interfaces/Busqueda.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlPoke="https://pokeapi.co/api/v2/pokemon/";

  constructor( private http:HttpClient) { }



  public getPokemon(pokemon:Busqueda):Observable<any>{

    console.log(this.urlPoke + pokemon.nombre);
    return this.http.get<any>(this.urlPoke+pokemon.nombre);

  }
}

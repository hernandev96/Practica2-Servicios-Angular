import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { buscar } from '../pokemon/interfaces/buscar.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlPoke="https://pokeapi.co/api/v2/pokemon/";

  constructor( private http:HttpClient) { }



  public getPokemon(pokemon:buscar):Observable<any>{

    console.log(this.urlPoke + pokemon.nombre);
    return this.http.get<any>(this.urlPoke+pokemon.nombre);

  }
}

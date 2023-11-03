import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    PokemonComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
    PaginaPrincipalComponent
  ]
})
export class PokemonModule { }

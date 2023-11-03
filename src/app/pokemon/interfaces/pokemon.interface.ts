import { habilidad } from "./habilidad.interface";

export interface Pokemon{
    nombre:string;
    habilidades:[habilidad],
    experiencia_base:number,
    imagen:string,
    peso:number
}

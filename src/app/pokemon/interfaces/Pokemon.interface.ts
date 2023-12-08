import { Habilidad } from "./Habilidad.interface";

export interface Pokemon{
    nombre:string;
    habilidades:[Habilidad],
    experiencia_base:number,
    imagen:string,
    peso:number
}

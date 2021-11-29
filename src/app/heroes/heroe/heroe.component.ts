import { Component } from "@angular/core"; //importación del componente

//decorador
@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent{
    nombre: string = "Ironman";
    edad: number = 40;

    get nombreCapitalizadora(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(){
        this.nombre = "Spiderman";
    }

    cambiarEdad(){
        this.edad = 18;
    }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','IronMan','Hulk','Thor'];

  heroeBorrado: string = "";

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

  validaHeroeBorrado(): boolean{
    if(this.heroeBorrado.length == 0)
      return false;
    else
      return true;
  }

}

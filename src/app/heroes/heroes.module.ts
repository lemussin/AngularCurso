import { CommonModule } from '@angular/common';
import  { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//Son los componentes visibles fuera del module
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{
    
}
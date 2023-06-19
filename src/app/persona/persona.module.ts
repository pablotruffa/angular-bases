import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { CrearComponent } from './components/crear/crear.component';
import { PagesComponent } from './pages/pages.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaComponent, CrearComponent, PagesComponent],
  imports: [CommonModule, FormsModule],
  exports: [ListaComponent, CrearComponent, PagesComponent],
})
export class PersonaModule {}

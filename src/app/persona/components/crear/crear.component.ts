import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Persona } from '../../interfaces/persona.interface';

@Component({
  selector: 'persona-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent {
  @Output()
  public onNuevaPersona: EventEmitter<Persona> = new EventEmitter();

  public persona: Persona = {
    id: '',
    nombre: '',
    apellido: '',
  };

  constructor() {}

  public emitPersona(): void {
    if (this.persona.nombre.length === 0 || this.persona.apellido.length === 0)
      return;

    this.onNuevaPersona.emit({ ...this.persona, id: uuid() });

    //Limpiar Formulario
    this.persona = { nombre: '', apellido: '' };
  }
}

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Persona } from '../../interfaces/persona.interface';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'persona-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  @Output()
  public onDeletePersona: EventEmitter<string> = new EventEmitter();

  @Input()
  public lista: Persona[] = [
    {
      id: uuid(),
      nombre: 'Hans',
      apellido: 'Landa',
    },
  ];

  deletePersona(id?: string) {
    if (!id) return;

    this.onDeletePersona.emit(id);
  }
}

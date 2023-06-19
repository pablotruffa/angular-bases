import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor() {}

  public personas: Persona[] = [
    {
      id: uuid(),
      nombre: 'Enzo',
      apellido: 'Gorlami',
    },
    {
      id: uuid(),
      nombre: 'Dominic',
      apellido: 'Dicoco',
    },
    {
      id: uuid(),
      nombre: 'Antonio',
      apellido: 'Margaretti',
    },
  ];

  public onNuevaPersona(persona: Persona): void {
    this.personas.push(persona);
  }

  public onDeletePersona(id: string): void {
    this.personas = this.personas.filter((persona) => persona.id !== id);
  }
}

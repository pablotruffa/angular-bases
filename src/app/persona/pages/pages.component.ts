import { Component } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'persona-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent {
  //Inyectamos el servicio PersonaServide
  constructor(private personaService: PersonaService) {}

  get personas(): Persona[] {
    return this.personaService.personas;
  }

  onNuevaPersona(persona: Persona): void {
    this.personaService.onNuevaPersona(persona);
  }

  onDeletePersona(id: string): void {
    this.personaService.onDeletePersona(id);
  }
}

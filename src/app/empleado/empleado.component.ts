import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Necesario para *ngIf, *ngFor, ngStyle, ngClass
import { FormsModule } from '@angular/forms';   // <--- Necesario para [(ngModel)]
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  standalone: true, // <--- Esto ya lo tenías implícito, pero es bueno explicitarlo
  imports: [CommonModule, FormsModule], // <--- AQUÍ se importan las herramientas
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  title: string = "Hola empleado";
  
  // Propiedades existentes
  public empleado!: Empleado;
  public empleadoExt!: Empleado;
  public trabajadores: Array<Empleado> = [];
  public trabajadorExterno: boolean = false;

  // Propiedades nuevas de las diapositivas 
  public color: string = 'blue';
  public color_seleccionado: string = '#ccc';

  constructor(){
    // Tu código original respetado
    this.empleadoExt = new Empleado("LolitoFdez", 32, "YEPA", true);
    this.trabajadores = [
      new Empleado("Marta", 27, "Gandúl", false),
      new Empleado("Ana", 43, "Bebé jefaso", true),
      new Empleado("Alejandro", 38, "Pro", true),
      new Empleado("Pedro", 47, "Pelele", true),
    ];
    this.trabajadorExterno = true;
  }

  // Función nueva de las diapositivas 
  cambiarExterno(valor: boolean) {
    this.trabajadorExterno = valor;
  }
}
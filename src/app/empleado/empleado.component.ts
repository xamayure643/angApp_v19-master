import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  title:string = "Hola empleado";
  public empleado!: Empleado;
  public empleadoExt!:Empleado;
  public trabajadores:Array<Empleado>=[];
  public trabajadorExterno:boolean=false;

  constructor(){
    this.empleadoExt = new Empleado("Pedro",47,"Pelele",true);
    this.trabajadores = [new Empleado("Marta",27,"Gandúl",false),
                         new Empleado("Ana",43,"Bebé jefaso",true),
                         new Empleado("Alejandro",38,"Pro",true)]
    this.trabajadorExterno=true;

  }

}

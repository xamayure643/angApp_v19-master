import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Importamos tu componente (asegúrate que la ruta sea correcta)
import { EmpleadoComponent } from './empleado/empleado.component'; 

@Component({
  selector: 'app-root',
  // 2. Lo añadimos a la lista de imports para poder usarlo en el HTML
  imports: [RouterOutlet, EmpleadoComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angApp_v19';
}
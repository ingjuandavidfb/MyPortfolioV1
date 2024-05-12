import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss']
})
export class ProyectHeaderComponent {

  selectedNavItem: string = 'home'; // Inicialmente selecciona 'home'

  constructor(private router: Router){

  }

  navigateTo(routeId: string): void {
    switch (routeId) {
      case 'home':
        this.router.navigate(['home']);
        this.selectedNavItem = routeId;
        break;
      case 'projects':
        this.router.navigate(['projects']);
        this.selectedNavItem = routeId;
        break;
      case 'skills':
        this.router.navigate(['skills']);
        this.selectedNavItem = routeId;
        break;
      case 'contact':
        this.router.navigate(['contact']);
        this.selectedNavItem = routeId;
        break;
      default:
        // En caso de que el id no coincida con ninguna ruta conocida, puedes hacer algo aquí, como mostrar un mensaje de error.
        this.router.navigate(['']);
        break;
    }
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-footer',
  templateUrl: './project-footer.component.html',
  styleUrls: ['./project-footer.component.scss']
})
export class ProjectFooterComponent {

constructor(private router: Router) {}

navigateTo(routeId: string): void {
  switch (routeId) {
    case 'home':
      this.router.navigate(['home']);
      break;
    case 'projects':
      this.router.navigate(['projects']);
      break;
    case 'skills':
      this.router.navigate(['skills']);
      break;
    case 'contact':
      this.router.navigate(['contact']);
      break;
    default:
      // En caso de que el id no coincida con ninguna ruta conocida, puedes hacer algo aquí, como mostrar un mensaje de error.
      console.error('Ruta no válida');
      break;
  }
}



}

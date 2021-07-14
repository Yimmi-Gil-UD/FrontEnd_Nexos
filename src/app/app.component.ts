import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema Facturacion - Nexos';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Nuevo(){
    this.router.navigate(["add"]);
  }

  ListarUsuario(){
    this.router.navigate(["listarUsuario"]);
  }

  NuevoUsuario(){
    this.router.navigate(["addUsuario"]);
  }

  ListarMercancia(){
    this.router.navigate(["listarMercancia"]);
  }

  NuevaMercancia(){
    this.router.navigate(["addMercancia"]);
  }

}

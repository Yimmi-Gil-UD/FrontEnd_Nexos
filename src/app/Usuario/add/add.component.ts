import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddUsuarioComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  usuario:Usuario = new Usuario();

  GuardarUsuario(usuario:Usuario)
  {
    this.service.CreateUsuario(usuario).subscribe(data=>{
      alert("Se agrego con exito el nuevo usuario !!");
      this.router.navigate(["listarUsuario"]);
    })
  }
}

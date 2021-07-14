import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarUsuarioComponent implements OnInit {

 usuarios:Usuario[] | undefined;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(data=>{
      this.usuarios=data;
    })
  }

}

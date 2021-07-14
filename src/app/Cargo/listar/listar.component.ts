import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Cargo } from 'src/app/Modelo/Cargo';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  cargos:Cargo[] | undefined;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCargos().subscribe(data=>{
      this.cargos= data;  
    })
  }

  DeleteCargo(cargo:Cargo){
    this.service.Delete(cargo).subscribe(data=>{
      this.cargos= this.cargos?.filter(p=>p!==cargo);
      alert("Usuario eliminado ");
    })
  }


}

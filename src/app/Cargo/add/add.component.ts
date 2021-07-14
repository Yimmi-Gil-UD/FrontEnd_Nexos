import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/Modelo/Cargo';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  cargo:Cargo = new Cargo();
  Guardar(cargo:Cargo)
  {
    this.service.CreateCargo(cargo).subscribe(data=>{
      alert("Se agrego con exito el nuevo cargo !!");
      this.router.navigate(["listar"]);
    })
  }
}

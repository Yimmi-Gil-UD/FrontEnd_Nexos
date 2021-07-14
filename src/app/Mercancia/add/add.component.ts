import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mercancia } from 'src/app/Modelo/Mercancia';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddMercanciaComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  mercancia:Mercancia = new Mercancia();

  GuardarMercancia(mercancia:Mercancia)
  {
    this.service.CreateMercancia(mercancia).subscribe(data=>{
      alert("Se agrego con exito la nueva mercancia !!");
      this.router.navigate(["listarMercancia"]);
    })
  }

}

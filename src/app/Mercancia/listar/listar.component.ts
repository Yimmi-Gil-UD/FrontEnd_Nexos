import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Mercancia } from 'src/app/Modelo/Mercancia';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarMercanciaComponent implements OnInit {

  mercancias:Mercancia[] | undefined;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getMercancias().subscribe(data=>{
      this.mercancias= data;
    })

}
}

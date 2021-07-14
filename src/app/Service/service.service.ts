import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cargo} from '../Modelo/Cargo';
import {Usuario} from '../Modelo/Usuario';
import {Mercancia} from '../Modelo/Mercancia';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 
  constructor(private http:HttpClient) { }
  
  Url = 'http://localhost:8080/Cargo/Listar';
  UrlAgregar = 'http://localhost:8080/Cargo/Save';
  UrlEliminar = 'http://localhost:8080/Cargo/Eliminar';

  getCargos(){
    return this.http.get<Cargo[]>(this.Url);
  }

  CreateCargo(cargo:Cargo)
  {
    return this.http.post<Cargo> (this.UrlAgregar,cargo);
  }

  Delete(cargo:Cargo){
    return this.http.delete<Cargo>(this.UrlEliminar+"/"+cargo.id);
  }

 

  Url2 = 'http://localhost:8080/Usuario/Listar';
  UrlAgregarUsuario = 'http://localhost:8080/Usuario/Save';


  getUsuarios()
  {
    return this.http.get<Usuario[]>(this.Url2);
  }

  CreateUsuario(usuario:Usuario)
  {
    return this.http.post<Usuario> (this.UrlAgregarUsuario,usuario);
  }


  Url3 = 'http://localhost:8080/Mercancia/Listar'
  UrlAgregarMercancia = 'http://localhost:8080/Mercancia/Save';

  getMercancias()
  {
    return this.http.get<Mercancia[]>(this.Url3);
  }

  CreateMercancia(mercancia:Mercancia)
  {
    return this.http.post<Mercancia> (this.UrlAgregarMercancia,mercancia);
  }

}

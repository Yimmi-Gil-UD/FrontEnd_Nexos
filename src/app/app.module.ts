import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cargo/listar/listar.component';
import { AddComponent } from './Cargo/add/add.component';
import { EditComponent } from './Cargo/edit/edit.component';

import { ListarUsuarioComponent } from './Usuario/listar/listar.component';
import { AddUsuarioComponent } from './Usuario/add/add.component';
import { EditUsuarioComponent } from './Usuario/edit/edit.component';


import { ListarMercanciaComponent } from './Mercancia/listar/listar.component';
import { AddMercanciaComponent } from './Mercancia/add/add.component';
import { EditMercanciaComponent } from './Mercancia/edit/edit.component';

import {FormsModule} from '@angular/forms';
import {} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListarUsuarioComponent,
    AddUsuarioComponent,
    EditUsuarioComponent,
    ListarMercanciaComponent,
    AddMercanciaComponent,
    EditMercanciaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

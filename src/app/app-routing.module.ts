import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Cargo/add/add.component';
import { EditComponent } from './Cargo/edit/edit.component';
import { ListarComponent } from './Cargo/listar/listar.component';
import { AddUsuarioComponent } from './Usuario/add/add.component';
import { EditUsuarioComponent } from './Usuario/edit/edit.component';
import { ListarUsuarioComponent } from './Usuario/listar/listar.component';
import { AddMercanciaComponent } from './Mercancia/add/add.component';
import { EditMercanciaComponent } from './Mercancia/edit/edit.component';
import { ListarMercanciaComponent } from './Mercancia/listar/listar.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},

  {path:'listarUsuario',component:ListarUsuarioComponent},
  {path:'addUsuario',component:AddUsuarioComponent},
  {path:'editUsuario',component:EditUsuarioComponent},

  {path:'listarMercancia',component:ListarMercanciaComponent},
  {path:'addMercancia',component:AddMercanciaComponent},
  {path:'editMercancia',component:EditMercanciaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

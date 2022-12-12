import { EditarPostagemComponent } from './componentes/postagens/editar-postagem/editar-postagem.component';
import { ExcluirPostagemComponent } from './componentes/postagens/excluir-postagem/excluir-postagem.component';
import { CriarPostagemComponent } from './componentes/postagens/criar-postagem/criar-postagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPostagemComponent } from './componentes/postagens/listar-postagem/listar-postagem.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPostagem',
    pathMatch: 'full'
  },
  {
    path: 'criarPostagem',
    component: CriarPostagemComponent
  },
  {
    path: 'listarPostagem',
    component: ListarPostagemComponent
  },
  {
    path: 'postagens/excluirPostagem/:id',
    component: ExcluirPostagemComponent
  },
  {
    path: 'postagens/editarPostagem/:id',
    component: EditarPostagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

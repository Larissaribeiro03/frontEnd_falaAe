import { HomeModule } from './componentes/entrar/home.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPostagemComponent } from './componentes/postagens/criar-postagem/criar-postagem.component';
import { FormsModule } from '@angular/forms';
import { ListarPostagemComponent } from './componentes/postagens/listar-postagem/listar-postagem.component';
import { AppRoutingModule } from './app-routing.module';
import { PostagemComponent } from './componentes/postagens/postagem/postagem.component';
import { ExcluirPostagemComponent } from './componentes/postagens/excluir-postagem/excluir-postagem.component';
import { EditarPostagemComponent } from './componentes/postagens/editar-postagem/editar-postagem.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CadastroModule } from './componentes/cadastrar/cadastro.module';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPostagemComponent,
    ListarPostagemComponent,
    PostagemComponent,
    ExcluirPostagemComponent,
    EditarPostagemComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
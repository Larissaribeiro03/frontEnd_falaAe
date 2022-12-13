import { UserLogin } from './../postagem/userLogin';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../postagem/postagem';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-postagem',
  templateUrl: './criar-postagem.component.html',
  styleUrls: ['./criar-postagem.component.css']
})
export class CriarPostagemComponent {

  user: UserLogin = {
    id: 1
  }

  pensamento: Pensamento = {
    post: '',
    user: this.user
    // user: Map
    // conteudo: '',
    // autoria: '',
    // modelo: 'modelo1'
  }


  constructor(
    private service: PensamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPostagem'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPostagem'])
  }
}

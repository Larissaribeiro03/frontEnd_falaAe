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
    id: Number(localStorage.getItem("id")),
    nickname: '',
    status: ''
  }

  pensamento: Pensamento = {
    post: '',
    user: this.user,
    modelo: '',
    dataPost: new Date(),
    gostei: 0,
    naoGostei: 0
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

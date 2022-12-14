import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../postagem/postagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-postagem',
  templateUrl: './excluir-postagem.component.html',
  styleUrls: ['./excluir-postagem.component.css']
})
export class ExcluirPostagemComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    post: '',
    // conteudo: '',
    // autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
    ){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPostagem'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPostagem'])
  }

}

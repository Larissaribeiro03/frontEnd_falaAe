import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../postagem/postagem';

@Component({
  selector: 'app-editar-postagem',
  templateUrl: './editar-postagem.component.html',
  styleUrls: ['./editar-postagem.component.css']
})
export class EditarPostagemComponent implements OnInit{

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
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPostagem'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPostagem'])
  }
}

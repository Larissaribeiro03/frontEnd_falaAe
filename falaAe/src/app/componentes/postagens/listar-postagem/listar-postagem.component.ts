import { Pensamento } from './../postagem/postagem';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css']
})
export class ListarPostagemComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) {

  }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) =>
      this.listaPensamentos = listaPensamentos
    )}

}

import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './postagem';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    //dataPost: this.pensamento.dataPost,
    post:''

    //conteudo: 'I love angular',
    //autoria: 'Larissa',
    //modelo: 'modelo2'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    console.log(this.pensamento.post.length)
    if(this.pensamento.post.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  // larguraPensamento(): string {
  //   console.log(this.pensamento.conteudo.length)
  //   if(this.pensamento.conteudo.length >= 256) {
  //     return 'pensamento-g'
  //   }
  //   return 'pensamento-p'
  // }

}

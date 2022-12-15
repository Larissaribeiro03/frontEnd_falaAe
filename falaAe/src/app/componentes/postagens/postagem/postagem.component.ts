import { UserLogin } from './userLogin';
import { Component, Input, OnInit} from '@angular/core';
import { Pensamento } from './postagem';
import { PensamentoService } from './../pensamento.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {


    @Input() user: UserLogin = {
      id: Number(localStorage.getItem("id")),
      nickname: '',
      status: ''
    }
  
    @Input() pensamento: Pensamento = {
      id: 0,
      dataPost: new Date(),
      post:'',
      user: this.user,
      modelo: '',
      gostei: 0,
      naoGostei: 0
      // user: new Map<'id',1 >
      //conteudo: 'I love angular',
      //autoria: 'Larissa',
      //
    }
    constructor(    
      private service: PensamentoService,
      private router: Router,
      private route: ActivatedRoute) { }


    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.pensamento = pensamento
      })

    }

    curtiPensamento() {
      if(this.pensamento.id) {
        this.service.criarReaction(this.pensamento.id, 1, Number(this.user.id)).subscribe(() => {
          location.reload()
        })
      }
    }

    naocurtiPensamento() {
      if(this.pensamento.id) {
        this.service.criarReaction(this.pensamento.id, 2, Number(this.user.id)).subscribe(() => {
          location.reload()
        })
      }
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

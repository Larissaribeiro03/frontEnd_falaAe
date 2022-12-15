import { UserLogin } from './userLogin';
import { Component, Input, OnInit} from '@angular/core';
import { Pensamento } from './postagem';
import { Reactions } from './reactions';
import { ReactionService } from '../reacoes.service';
import { PensamentoService } from './../pensamento.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  constructor(   
    private service2: PensamentoService, 
    private service: ReactionService,
    private router: Router,
    private route: ActivatedRoute) { }


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
    ngOnInit(): void {
    }

    @Input() reaction1: Reactions = {
      dataReaction: new Date(),
      post: this.pensamento,
      user: this.user,
      tipoReaction: 1

    }

    @Input() reaction2: Reactions = {
      dataReaction: new Date(),
      post: this.pensamento,
      user: this.user,
      tipoReaction: 2
    }


  larguraPensamento(): string {
    console.log(this.pensamento.post.length)
    if(this.pensamento.post.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  criarReaction1() {
    this.service.criarReactions(this.reaction1).subscribe(() => {
      this.router.navigate(['/listarPostagem'])
      console.log(this.pensamento.id)
    })
  }
  criarReaction2() {
    this.service.criarReactions(this.reaction2).subscribe(() => {
      this.router.navigate(['/listarPostagem'])
    })
  }
  // larguraPensamento(): string {
  //   console.log(this.pensamento.conteudo.length)
  //   if(this.pensamento.conteudo.length >= 256) {
  //     return 'pensamento-g'
  //   }
  //   return 'pensamento-p'
  // }

}

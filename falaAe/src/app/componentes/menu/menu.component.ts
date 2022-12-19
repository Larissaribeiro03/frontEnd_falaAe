import { Component, Input } from '@angular/core';
import { UserLogin } from '../postagens/postagem/userLogin';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  nickname = localStorage.getItem("nickname");
  constructor(

    ) { }
  ngOnInit(): void {

  }

}

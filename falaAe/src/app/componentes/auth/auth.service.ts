import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

const API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(email: String, senha: String) {
    //const resp = this.http.post(API + '/user/validarSenha',  {email, senha} )
    //return resp;
    const body = {email: email, senha: senha}
    return axios.post(API + '/user/validarSenha', body)
    .then((resp) => {
      console.log(resp.data);
      return resp.data;
    }).catch((err) => {
        console.log(err);
        return {
          message: 'Usuário ou senha inválida.'
        }

    })

  }

  cadastrar(email: String,nickname: String, status: String, senha: String) {
    //const resp = this.http.post(API + '/user/validarSenha',  {email, senha} )
    //return resp;
    const body = {email: email, nickname: nickname, status: status, senha: senha}
    return axios.post(API + '/user/', body)
    .then((resp) => {
      console.log(resp.data);
      return resp.data;
    }).catch((err) => {
        console.log(err);
        return {
          message: 'Nao conseguir criar.'
        }

    })

  }
}
